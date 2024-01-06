// 获取文件详细信息
const getFileConfig = (file) => {
  const chunkSize = 1024 * 1024; // 切片 每片大小
  const totalSize = file.size; // 文件总大小
  const chunkQuantity = Math.ceil(totalSize / chunkSize); // 切片总数

  return { chunkSize, totalSize, chunkQuantity };
};

// 设置
const setFileReader = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => resolve(e);

    reader.readAsBinaryString(blob);
  });

// 文件格式处理
const fileFormat = async ({ file, offset }) => {
  // start worker
  const { chunkSize, totalSize, chunkQuantity } = getFileConfig(file);

  const blob = file.slice(
    offset * chunkSize,
    (offset + 1) * chunkSize > totalSize ? totalSize : (offset + 1) * chunkSize
  );

  const e = await setFileReader(blob);
  // end worker

  self.postMessage({
    e,
    chunkQuantity,
  });
};

self.onmessage = (params) => {
  fileFormat(params);
};
