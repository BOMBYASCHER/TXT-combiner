export default (files, substring) => files.filter((name) => name.split('.')[0].includes(substring));
