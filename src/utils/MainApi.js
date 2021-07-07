class MainApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getUserInfo(token) {
        return fetch(this._baseUrl + 'users/me', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();//this makes object out of response
                }
                return Promise.reject(`Error: ${res.status}`)
            })
    }

    getArticles(token) {
        return fetch(this._baseUrl + "articles", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => { return res.json() }
            )
    }

    saveArticle({ title, description, url, urlToImage, publishedAt, keyword, source }) {
        return fetch(this._baseUrl + 'articles', {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                title,
                description,
                url,
                urlToImage,
                publishedAt,
                keyword,
                source
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();//this makes object out of response
                }
                return Promise.reject(`Error: ${res.status}`)
            })
    }

    removeArticle(articleId, token) {
        return fetch(this._baseUrl + 'articles/' + articleId, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();//this makes object out of response
                }
                return Promise.reject(`Error: ${res.status}`)
            })
    }

    register(email, password, username) {
        console.log(email);
        console.log(password);
        console.log(username);
        return fetch(this._baseUrl + 'signup', {
            method: 'POST',
            headers: { "Accept": "application/json",
            "Content-Type": "application/json"},
            body: JSON.stringify({ email, password, username })
        })
            .then((res) => {
                console.log(res);
                if (res.status === 201 || res.status === 200) {
                    return res.json();
                }
            })
    }

    login(email, password) {
        return fetch(this._baseUrl + 'signin', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password })
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                localStorage.setItem('jwt', data.token);
                return
            })
    }

    checkToken(token) {
        return fetch(this._baseUrl + 'users/me', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => data)
    }
}

export const mainApi = new MainApi({
    baseUrl: 'https://api.lmontem-news-explorer.students.nomoreparties.site/',
    headers: { "Accept": "application/json", 'Content-Type': 'application/json'}
});