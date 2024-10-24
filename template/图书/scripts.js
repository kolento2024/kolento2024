// 假设我们有一个图书数据数组
const booksData = [
{
    title: "《活着》",
    author: "余华",
    price: "￥30",
    type: "文学",
    rating: "9.0",
    description: "一部关于生活的深刻作品。",
    image: "path/to/book1.jpg",
    comments: ["非常值得一读！", "故事很感人。"]
  },
  {
    title: "《白夜行》",
    author: "东野圭吾",
    price: "￥35",
    type: "推理",
    rating: "8.8",
    description: "一桩命案，两个孩子，一段跨越时空的爱恨纠葛。",
    image: "path/to/book2.jpg",
    comments: ["推理小说的经典之作。", "情节紧凑，引人入胜。"]
  },
  {
    title: "《三体》",
    author: "刘慈欣",
    price: "￥40",
    type: "科幻",
    rating: "9.2",
    description: "地球文明与三体文明的首次接触。",
    image: "path/to/book3.jpg",
    comments: ["想象力丰富，震撼人心。", "科幻迷必读之作。"]
  },
  {
    title: "《三国演义》",
    author: "罗贯中",
    price: "￥50",
    type: "历史",
    rating: "8.5",
    description: "讲述三国时期的历史风云。",
    image: "path/to/book4.jpg",
    comments: ["了解中国古代历史的好书。", "文笔优美，情节生动。"]
  },
  {
    title: "《百年孤独》",
    author: "加西亚·马尔克斯",
    price: "￥32",
    type: "文学",
    rating: "8.9",
    description: "魔幻现实主义的经典之作。",
    image: "path/to/book5.jpg",
    comments: ["文风独特，值得一读。", "对人性深刻的探讨。"]
  },
  {
    title: "《哈利·波特与魔法石》",
    author: "J.K.罗琳",
    price: "￥25",
    type: "奇幻",
    rating: "9.1",
    description: "哈利·波特系列的第一部。",
    image: "path/to/book6.jpg",
    comments: ["充满魔力的世界。", "适合所有年龄段的读者。"]
  },
  {
    title: "《追风筝的人》",
    author: "卡勒德·胡赛尼",
    price: "￥33",
    type: "文学",
    rating: "8.7",
    description: "关于友情、背叛与救赎的故事。",
    image: "path/to/book7.jpg",
    comments: ["情感真挚，让人动容。", "深刻反映了人性的复杂。"]
  },
  {
    title: "《安徒生童话选》",
    author: "汉斯·克里斯蒂安·安徒生",
    price: "￥20",
    type: "儿童文学",
    rating: "8.4",
    description: "收录了安徒生的多篇经典童话。",
    image: "path/to/book8.jpg",
    comments: ["适合孩子们阅读的童话集。", "美好的童年回忆。"]
  },
  {
    title: "《月亮与六便士》",
    author: "威廉·萨默塞特·毛姆",
    price: "￥28",
    type: "文学",
    rating: "8.6",
    description: "一个关于梦想与现实的故事。",
    image: "path/to/book9.jpg",
    comments: ["引人深思的小说。", "艺术与人生的选择。"]
  },
  {
    title: "《霍比特人》",
    author: "J.R.R.托尔金",
    price: "￥30",
    type: "奇幻",
    rating: "9.0",
    description: "讲述了霍比特人比尔博·巴金斯的冒险经历。",
    image: "path/to/book10.jpg",
    comments: ["奇幻世界的入门之作。", "充满了想象与冒险。"]
  },
  {
    title: "《人类简史》",
    author: "尤瓦尔·赫拉利",
    price: "￥45",
    type: "历史",
    rating: "8.3",
    description: "从认知革命到农业革命，再到工业革命。",
    image: "path/to/book11.jpg",
    comments: ["对人类历史的深度剖析。", "开拓视野的读物。"]
  },
  {
    title: "《未来简史》",
    author: "尤瓦尔·赫拉利",
    price: "￥45",
    type: "历史",
    rating: "8.2",
    description: "探讨了人类未来的可能性。",
    image: "path/to/book12.jpg",
    comments: ["对未来趋势的思考。", "值得反复阅读。"]
  },
  {
    title: "《黑客与画家》",
    author: "保罗·格雷厄姆",
    price: "￥35",
    type: "科技",
    rating: "8.1",
    description: "探讨了编程与创业的关系。",
    image: "path/to/book13.jpg",
    comments: ["程序员必读书籍之一。", "对编程文化的深刻理解。"]
  },
  {
    title: "《黑客帝国》",
    author: "吴恩达",
    price: "￥35",
    type: "科幻",
    rating: "8.0",
    description: "虚拟现实与人工智能的结合。",
    image: "path/to/book14.jpg",
    comments: ["充满未来感的科幻作品。", "技术与哲学的碰撞。"]
  },
  {
    title: "《安徒生童话选》",
    author: "汉斯·克里斯蒂安·安徒生",
    price: "￥20",
    type: "儿童文学",
    rating: "8.4",
    description: "收录了安徒生的多篇经典童话。",
    image: "path/to/book15.jpg",
    comments: ["适合孩子们阅读的童话集。", "美好的童年回忆。"]
  },
  {
    title: "《小王子》",
    author: "安托万·德·圣埃克苏佩里",
    price: "￥22",
    type: "儿童文学",
    rating: "8.7",
    description: "讲述了小王子的星际旅行。",
    image: "path/to/book16.jpg",
    comments: ["简洁而富有哲理的故事。", "适合大人小孩一起读。"]
  },
  {
    title: "《霍乱时期的爱情》",
    author: "加西亚·马尔克斯",
    price: "￥38",
    type: "文学",
    rating: "8.6",
    description: "一部关于爱情与疾病的小说。",
    image: "path/to/book17.jpg",
    comments: ["爱情的多种面貌。", "情感细腻，文笔优美。"]
  },
  {
    title: "《傲慢与偏见》",
    author: "简·奥斯汀",
    price: "￥30",
    type: "文学",
    rating: "8.5",
    description: "一部经典的英国爱情小说。",
    image: "path/to/book18.jpg",
    comments: ["经典的爱情故事。", "文笔优雅，人物鲜明。"]
  },
  {
    title: "《1984》",
    author: "乔治·奥威尔",
    price: "￥28",
    type: "文学",
    rating: "8.4",
    description: "描绘了一个极权主义社会。",
    image: "path/to/book19.jpg",
    comments: ["对未来社会的警示。", "思想深刻，值得一读。"]
  },
  {
    title: "《动物农场》",
    author: "乔治·奥威尔",
    price: "￥25",
    type: "文学",
    rating: "8.3",
    description: "通过动物寓言批判极权主义。",
    image: "path/to/book20.jpg",
    comments: ["寓意深刻的作品。", "对权力腐败的批判。"]
  }
];

// 动态生成首页图书分类
function renderBookCategories() {
  const categoriesSection = document.querySelector('.category-grid');
  const types = ["文学", "科幻", "历史", "艺术"];
  types.forEach(type => {
    const bookType = booksData.filter(book => book.type === type).slice(0, 8);
    bookType.forEach(book => {
      const card = document.createElement('div');
      card.className = 'book-card';
      card.innerHTML = `
        <a href="details.html?book=${encodeURIComponent(JSON.stringify(book))}">
          <img src="${book.image}" alt="${book.title} Cover">
          <div class="card-info">
            <p class="card-title">${book.title}</p>
            <p class="card-meta">${book.author}</p>
            <p class="card-meta">${book.price}</p>
          </div>
        </a>
      `;
      categoriesSection.appendChild(card);
    });
  });
}

renderBookCategories();

// 动态生成详情页面内容
function renderBookDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookDataStr = urlParams.get('book');
  if (bookDataStr) {
    const bookData = JSON.parse(decodeURIComponent(bookDataStr));
    const detailsSection = document.querySelector('.book-details');
    detailsSection.querySelector('.book-cover').src = bookData.image;
    detailsSection.querySelector('.book-title').textContent = bookData.title;
    detailsSection.querySelector('.book-author').textContent = `作者: ${bookData.author}`;
    detailsSection.querySelector('.book-price').textContent = `价格: ${bookData.price}`;
    detailsSection.querySelector('.book-type').textContent = `类型: ${bookData.type}`;
    detailsSection.querySelector('.book-rating').textContent = `评分: ${bookData.rating}`;
    detailsSection.querySelector('.book-description').innerHTML = `<p>${bookData.description}</p>`;
    const commentList = detailsSection.querySelector('.comment-list');
    bookData.comments.forEach(comment => {
      const li = document.createElement('li');
      li.textContent = comment;
      commentList.appendChild(li);
    });
  }
}

if (document.location.pathname === '/details.html') {
  renderBookDetails();
}