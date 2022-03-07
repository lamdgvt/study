<template>
    <div class="login-header">
        <img :src="qrCodeImg" @click="switchModel" />
    </div>
    <div class="login-content" id="loginContentRef" ref="loginContentRef">
        <a-tabs v-model:activeKey="loginType" centered :tabBarGutter="60">
            <a-tab-pane key="email">
                <template #tab>
                    <span>
                        <mail-outlined />邮箱登陆
                    </span>
                </template>
                <!-- 邮箱登陆 -->
                <EmailLogin ref="emailLoginRef" />
            </a-tab-pane>
            <a-tab-pane key="mobile">
                <template #tab>
                    <span>
                        <mobile-outlined />手机号登陆
                    </span>
                </template>
                <!-- 手机登陆 -->
                <MobileLogin ref="mobileLoginRef" />
            </a-tab-pane>
        </a-tabs>
        <a-button type="primary" :style="{ width: '100%' }" @click="verifyNVC">登陆</a-button>
        <a-button
            type="link"
            size="small"
            :style="{ marginTop: '15px' }"
            @click="() => router.push({ name: 'signUp' })"
        >注册账户</a-button>
    </div>
</template>
<script setup lang="ts">
import { MailOutlined, MobileOutlined } from '@ant-design/icons-vue';
import { loginAPI } from '@/api/common';
import qrCodeImg from '@/assets/images/Login/qrCode.png';
import MobileLogin from './MobileLogin.vue';
import EmailLogin from './EmailLogin.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import Cookies from 'js-cookie';
import useGetUser from '@/hooks/useGetUser';
import useEncrypt from '@/hooks/useEncrypt';

const { encryptFn } = useEncrypt();
const { getUserFn } = useGetUser();
const router = useRouter();
const emailLoginRef = ref();
const mobileLoginRef = ref();
const loginContentRef = ref()

// 登陆方式
const loginType = ref('email');

const emit = defineEmits(['switchModel']);

// 切换扫码登陆模式
const switchModel = () => emit('switchModel');

// 登陆
const login = async () => {
    let params;
    switch (loginType.value) {
        case 'email': {
            params = await emailLoginRef?.value?.getValues()
            params.loginType = '1'
            break;
        }
        case 'mobile': {
            params = await mobileLoginRef?.value?.getValues()
            params.loginType = '0'
            break;
        }
        default: break;
    }

    params.password = encryptFn(params.password)

    const { data } = await loginAPI(params)

    if (data.code === 0) {
        Cookies.set('epr-access-token', data.data);
        message.success('登陆成功')
        router.push({ name: 'buyService' })
        getUserFn()
    }
}

// 初始化 无痕
const initAWSC = () => {
    window.AWSC.use("nvc", (state: string, module: any) => {
        // 初始化 调用module.init进行初始化
        window.nvc = module?.init ? module.init({
            // 应用类型标识。它和使用场景标识（scene字段）一起决定了无痕验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
            appkey: "CF_APP_1",
            //使用场景标识。它和应用类型标识（appkey字段）一起决定了无痕验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的scene值，请务必正确填写。
            scene: "nvc_register",
            // 二次验证获取人机信息串，跟随业务请求一起上传至业务服务器，由业务服务器进行验签。
            success(data: string) {
                window.console && console.log(data)
            },
            // 前端二次验证失败时触发该回调参数
            fail(failCode: string) {
                window.console && console.log(failCode)
            },
            // 前端二次验证加载异常时触发该回调参数。
            error(errorCode: string) {
                window.console && console.log(errorCode)
            }
        }) : () => { };
    });

    window.registerRequest = ({ result }: any) => {
        // 无痕验证通过
        if (result.code === 200 || result.code === 100) login()

        else window.console && console.log(result.code, result.msg)
    }
}

// 验证无痕
const verifyNVC = () => {
    window.nvc.getNVCValAsync((nvcVal: string) => {
        var s = document.createElement('script');
        // 获取人机信息串
        // 将以下getNVCVal()函数的值，跟随业务请求一起上传，由后端请求AnalyzeNvc接口并返回200，400，600或者800。
        // 正式上线前务必将该服务端接口，更改为您自己的业务服务端接口
        s.src = `https://cf.aliyun.com/nvc/nvcAnalyze.jsonp?callback=registerRequest&a=${nvcVal}`;
        document.body.append(s);
    });
}



initAWSC()

</script>
<style lang="less" scoped>
.login-header {
    height: 60px;
    img {
        position: relative;
        right: -20px;
        float: right;
        transform: rotate(45deg);
        cursor: pointer;
    }
}

.login-content {
    padding: 0 60px;
    text-align: center;
}
</style>
