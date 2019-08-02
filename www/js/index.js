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
        getPosts: {
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
        getUserFromPost: {

        }
        
    }
})

new Vue({
    el: '#sparks',
    data() {
        return {
            sparks: [],
            loading: true,
            isSeen: true,
            isUnseen: true,
            errored: false
        }
    },
    methods: {
        setSeen: function() {
            this.isSeen = false;
        },
        setUnseen: function() {
            this.isUnseen = false;
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