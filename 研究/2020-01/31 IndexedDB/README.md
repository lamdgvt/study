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
// 数据库
let db = null;
// 表
let objectStore = null;

request.onerror = function (event) {
  console.log('数据库打开报错');
};


request.onsuccess = function (event) {
  db = event.target.result;
  console.log('数据库打开成功');
};


upgradeneeded 事件
如果指定的版本号, 大于数据库的实际版本号，就会发生数据库升级事件 upgradeneeded.
建表
request.onupgradeneeded = function(event) {
  db = event.target.result;

  // 由于数据库由无到有 属于数据库升级的情况 会触发 onupgradeneeded 事件 所以将建表在此 操作
  // 判断此表不存在的话 创建 person 表
  if (!db.objectStoreNames.contains('person')) {
      // keyPath 为 id 主键 autoIncrement 自增长
      objectStore = db.createObjectStore('person', { keyPath: 'id', autoIncrement: true});

      // 建立索引 可以让你搜索任意字段
      objectStore.createIndex('name', 'name', { unique: false })
  }
}

新增数据操作
const add = () => {
  // IDBTransaction 对象用来异步操作数据库事务, 所有的读写操作都要通过这个对象进行
  const transaction = db.transaction(['person'], 'readwrite')
  // IDBObjectStore 对象对应一个对象仓库
  const objectStore = transaction.objectStore('person')

  objectStore.add({ name: '张三', age: 24, email: 'zhangsan@example.com' });

  request.onsuccess = function (event) {
      console.log('数据写入成功');
  };

  request.onerror = function (event) {
      console.log('数据写入失败');
  }
}

读取数据
const read = () => {
  const transaction = db.transaction(['person'], 'readwrite')
  const objectStore = transaction.objectStore('person')

  const request = objectStore.get(1);

  request.onerror = function(event) {
    console.log('事务失败');
  };

  request.onsuccess = function(event) {
    if (request.result) 
      console.log(request.result)
    else console.log('未获得数据记录');
  };
}

遍历数据
const readAll = () => {
  const transaction = db.transaction('person')
  const objectStore = transaction.objectStore('person')

  // openCursor 是用来获取一个 IDBCursor 对象，用来遍历索引里面的所有条目
  objectStore.openCursor().onsuccess = function (event) {
      const cursor = event.target.result;

      if (cursor) {
          console.log(cursor)
          // 指针向前移动一个位置。它可以接受一个主键作为参数，这时会跳转到这个主键
          cursor.continue();
      } else
          console.log('没有更多数据了！');
  };
}

修改数据
const update = () => {
  const transaction = db.transaction(['person'], 'readwrite')
  const objectStore = transaction.objectStore('person')

  const request = objectStore.put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' });

  request.onsuccess = function (event) {
      console.log('数据更新成功');
  };

  request.onerror = function (event) {
      console.log('数据更新失败');
  }
}

删除数据
const remove = () => {
  const transaction = db.transaction(['person'], 'readwrite')
  const objectStore = transaction.objectStore('person')

  const request = objectStore.delete(10)

  request.onsuccess = function (event) {
      console.log('数据删除成功');
  };
}

使用索引
const useIndex = () => {
  const transaction = db.transaction(['person'], 'readonly');
  const objectStore = transaction.objectStore('person');
  const index = objectStore.index('name');
  const request = index.get('张三');

  request.onsuccess = function (e) {
    const result = e.target.result;

    console.log(result);
  }
}


indexedDB.open()
打开数据库  返回 IDBRequest 对象
{
  事件:
  success：           打开成功。
  error：             打开失败。
  upgradeneeded：     第一次打开该数据库，或者数据库版本发生变化。
  blocked：           上一次的数据库连接还未关闭。
}

indexedDB.deleteDatabase()
删除数据库
{
  事件:
  success：     删除成功
  error：       删除报错
}

indexedDB.cmp()
比较两个值是否为 indexedDB 的相同的主键
0 表示相同   1 大于  -1 小于


IDBRequest
indexedDB.open()
indexedDB.deleteDatabase()
{
  属性 && 事件
  IDBRequest.readyState               等于pending表示操作正在进行，等于done表示操作正在完成。
  IDBRequest.result                   返回请求的结果。如果请求失败、结果不可用，读取该属性会报错。
  IDBRequest.error                    请求失败时，返回错误对象。
  IDBRequest.source                   返回请求的来源（比如索引对象或 ObjectStore）。
  IDBRequest.transaction              返回当前请求正在进行的事务，如果不包含事务，返回null。
  IDBRequest.onsuccess                指定success事件的监听函数。
  IDBRequest.onerror                  指定error事件的监听函数。
  IDBOpenDBRequest.onblocked          指定blocked事件（upgradeneeded事件触发时，数据库仍然在使用）的监听函数。
  IDBOpenDBRequest.onupgradeneeded    upgradeneeded事件的监听函数。
}


IDBDatabase
IDBDatabase.close                     关闭数据库连接，实际会等所有事务完成后再关闭。
IDBDatabase.createObjectStore         创建存放数据的对象仓库，返回 IDBObjectStore 对象。versionchange 事件调用。
IDBDatabase.deleteObjectStore         删除指定的对象仓库。versionchange 事件调用。
IDBDatabase.transaction               返回 IDBTransaction 事务对象。


```