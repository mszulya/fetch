const informationBlock = document.querySelector('.information');
const button = document.getElementById('btn');

let userName;
const buttonOnClick = () => {
    let userName = document.getElementById('login').value;
    fetch(`https://api.github.com/users/${userName}`)
    .then((res) => res.json())
    .then(json => {
        console.log(json.avatar_url);
		console.log(json.name);
		console.log(json.bio);
		console.log(json.html_url);

        let userAvatar = new Image();
        userAvatar.src = json.avatar_url;
        userAvatar.className = 'avatar';
        informationBlock.append(userAvatar);

        let name = document.createElement('h1');
        name.className = 'name';
        name.innerHTML = json.name;
        informationBlock.append(name);

        let userInformation = document.createElement('p');
        userInformation.innerHTML = json.bio;
        informationBlock.append(userInformation);

        let userLink = document.createElement('a');
        userLink.href = json.html_url;
        userLink.title = 'Перейти';
        userLink.appendChild(document.createTextNode('Ссылка на GitHub'));
        informationBlock.append(userLink);

        document.getElementById('login').value = '';
    })
    .catch(err => alert('Введите логин'));
}
button.addEventListener('click',buttonOnClick);