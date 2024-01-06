#### 迭代器、生成器

```
迭代器是一个对象、它定义了一个序列, 并在终止时可能附带一个返回值.
迭代器一般有 value 和 done 属性.

内置的迭代器有 forEach、map、filter、some、every、reduce
他们都有一个 Symbol.iterator 迭代器  将可以被 for of 遍历
** Object 不是迭代器

一旦创建, 迭代器可以通过 next() 进行迭代.

生成器 Generator yield
生成特殊的迭代器
```

#### 高级生成器

```
next() 可以入参, 将被 yield 接受, 一般情况下空为 undefined.
```