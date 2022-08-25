

const users = [
    {
        id: 1,
        name:"rebeka",
        email: "jobcho5320@gmail.com",
        password: "123qwe",
    },
    {
        id: 2,
        name:"Kim",
        email: "james0@gmail.com",
        password: "qweqwe",
    },
];

const posts = [
    {
        id: 1,
        title: "간단한 HTTP API 개발 시작!",
        content: "Node.js 내장 모듈 서버 구현",
        userId: "1"
    },
    {
        id: 2,
        title: "간단한 HTTP API 개발 시작!",
        content: "Node.js 내장 모듈 서버 구현",
        userId: "1"
    },
];

const getUsers = (req, res) => {
    res.json({ users })
}

const getUserByUserId = (req, res) => {
    const userId = req.params.userId;
    const user = users.find((user) => user.id== userId);
    res.json({ user });
}

const getPosts = (req, res) => {
    res.json({ posts })
}

const createUser = (req, res) => {
    const user = req.body
    const newUser = users.push({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
    });
    res.json({ message: 'created!', 'user_id' : newUser })
}

const createPost = (req, res) => {
    const post = req.body;
    const newPost = posts.push({
        id: post.id,
        title: post.title,
        content: post.content,
    });
    res.json({ message: 'created!' , 'post_id': newPost })
}

const updatePost = (req, res) => {
    const inputPost = req.body
    const postId = req.params.postId;
    const post = posts.find((post) => post.id == postId)

    post.title = inputPost.title;
    post.content = inputPost.content;

    res.json({ message: 'updated!', 'updatedPost' : post});
}

const deletePost = (req, res) => {
    const postId = req.params.postId;
    const indexOfPostId = posts.findIndex((post) => post.id == postId);

    delete posts[indexOfPostId]
    console.log(posts);

    res.json({ message: 'deleted!'});
}

// serverWithExpresss.js 로 사용하기 위해서 모듈로 export함

module.exports = {
    getUsers,
    getUserByUserId,
    getPosts,
    createUser,
    createPost,
    updatePost,
    deletePost
}