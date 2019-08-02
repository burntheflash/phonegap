new Vue({
    el: '#feed',
    data() {
        return {
            posts: [],
            loading: true,
            errored: false
        }
    },
    mounted() {
        fetch('http://sparks.burntheflash.com/v1/posts')
        .then(response => response.json())
        .then(data => {
            this.posts = data;
            console.log(data)
        })
        .catch(err => {
            console.log(err)
            this.errored = true;
        })
        .finally(() => this.loading = false)
    }
})

new Vue({
    el: '#sparks',
    data() {
        return {
            sparks: [],
            loading: true,
            errored: false
        }
    },
    mounted() {
        fetch('http://sparks.burntheflash.com/v1/sparks')
        .then(response => response.json())
        .then(data => {
            this.sparks = data;
            console.log(data)
        })
        .catch(err => {
            console.log(err)
            this.errored = true;
        })
        .finally(() => this.loading = false)
    }
})