export const validateIp = (ip) => {
  const ipPattern = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
  return ipPattern.test(ip);
};
