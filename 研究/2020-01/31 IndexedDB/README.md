#### 31. IndexedDB

```
（1）键值对储存。 IndexedDB 内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括 JavaScript 对象。对象仓库中，数据以"键值对"的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误。

（2）异步。 IndexedDB 操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。

（3）支持事务。 IndexedDB 支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。

（4）同源限制 IndexedDB 受到同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。

（5）储存空间大 IndexedDB 的储存空间比 LocalStorage 大得多，一般来说不少于 250MB，甚至没有上限。

（6）支持二进制储存。 IndexedDB 不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。


打开数据库
const request = window.indexedDB.open(databaseName, version);
// 表
let db = null;

request.onerror = function (event) {
  console.log('数据库打开报错');
};


request.onsuccess = function (event) {
  db = event.target.result;
  console.log('数据库打开成功');
};


upgradeneeded 事件
如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded。
request.onupgradeneeded = function (event) {
  db = event.target.result;
}

建表
request.onupgradeneeded = function(event) {
  db = event.target.result;

  // 判断此表不存在的话 创建 person 表
  if (!db.objectStoreNames.contains('person'))
    objectStore = db.createObjectStore('person', { keyPath: 'id' });
}


```