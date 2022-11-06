fetch("https://scratch.mit.edu/session/",
{"headers":{"x-requested-with": "XMLHttpRequest"}}).then(response=>response.text()).then(data=>console.log(data));
