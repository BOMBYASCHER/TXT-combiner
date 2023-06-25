export default (files, extension) => files.filter((name) => name.split('.')[1].includes(extension));
