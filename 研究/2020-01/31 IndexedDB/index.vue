<template>
    123
    <a-upload v-model:file-list="fileList" :customRequest="customRequest">
        <a-button>Click to Upload</a-button>
    </a-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useChunkDataBase from '@/hooks/useChunkDataBase'

const { addFileMenu, getFileMenu, getFileBase64 } = useChunkDataBase();

const fileList = ref([]);

// 切片处理
const chunkDispose = async (file: File) => {
    const { chunkSize, totalSize, chunkQuantity } = getFileConfig(file)
    const chunkArr: any[] = [];

    const dispose = async (offset: number): Promise<any> => {
        const isLastChunk = (offset + 1) * chunkSize > totalSize ? true : false

        const blob = file.slice(
            offset * chunkSize,
            isLastChunk ? totalSize : (offset + 1) * chunkSize
        )

        const e: any = await setFileReader(blob)

        chunkArr.push({ blob: e.target.result, offset })

        if (!isLastChunk) return dispose(offset + 1)
    }

    // 切片 offset
    await dispose(0)

    return {
        chunkSize,
        totalSize,
        chunkQuantity,
        chunkArr
    }
}

// 获取文件详细信息
const getFileConfig = (file: File) => {
    const chunkSize = 1024 * 1024; // 切片 每片大小
    const totalSize = file.size; // 文件总大小
    const chunkQuantity = Math.ceil(totalSize / chunkSize); // 切片总数

    return { chunkSize, totalSize, chunkQuantity }
}

// 设置
const setFileReader = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent) => resolve(e);

    reader.readAsBinaryString(blob);
})

// 切片存储
const sliceStore = async (file: File | any) => {
    const chunkConfig = await chunkDispose(file)

    const params = {
        uid: file.uid,
        name: file.name,
    }

    const primaryKey: number = await addFileMenu({
        ...params,
        ...chunkConfig,
    })

    const data: any = await getFileMenu(primaryKey)

    let chunkArr: any[] = [];

    if (data)
        chunkArr = await getFileBase64(data.id)

    return {
        chunkArr,
        ...params
    }
}


// 自定义上传
const customRequest = async ({ file }: { file: File }) => {
    // 切片处理 并存储到 indexedDB
    const data = await sliceStore(file)

    // 剩下的递归 自己看着办 仅供参考
    console.log(data)
}



</script>

<style lang="less" scoped>
</style>