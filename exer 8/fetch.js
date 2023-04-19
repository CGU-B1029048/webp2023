// GET text
const url_text_GET = 'https://script.googleusercontent.com/macros/echo?user_content_key=aC7pmFsu_YYu84WD-yGEugacHqgXJd1vsBzNCX7Q2sXLA_yQI7tZZSArQOUNzVHJLq2idnKuEb1OhzfOInctRVFhZjH_KJ9BOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa34Kz97eQVEmtBctCELHoydt5GICly04Ni6J8BasuK7Q4tF-ne-iWZ3FH8zaMrKbX56_CJDgCivzs2CXPCPXRzHm5x3JlgexzbwWq4azfLwZHoYsC-mfY8q3GzdhD7iB_g&lib=MJYIcJTnM8_xVwJDUMP83GT6nD5PpjW7q';

fetch(url_text_GET, {method: 'GET'})
.then(res => {
    return res.text();
}).then(textresult => {
    document.getElementById('text_get').innerText = textresult;
});

// GET json
fetch('https://randomuser.me/api/')
.then(res => {
    return res.json();
}).then(result => {
    console.log(result);
    var user_name = result.results[0].name;
    var str = `name: ${user_name['title']} ${user_name['first']}`;
    str += ` ${user_name['last']} Welcome!`;
    document.getElementById('json_get').innerText = str;
});

// POST text
fetch('https://reqres.in/api/articles', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: 'James'})
})
.then(response => response.json())
.then(data => {
    document.getElementById('text_post').innerText = data.id;
    console.log(data);
});

// POST json
const post_url = 'https://script.google.com/macros/s/AKfycbxXH6aPsldTBeS41WRMnJEA5Xstc7cYMj6YimDO2Al7H6DkJZiz/exec';
fetch(post_url, {
    method: 'POST',
    body: encodeURI(JSON.stringify({
        name: 'CJ',
        age: '22'
    })),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }
})
.then(res => {
    return res.json();
}).then(result => {
    document.getElementById('json_post').innerText = result['text'];
    console.log(result);
});
