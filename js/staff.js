const url_prefix = "./img/";

let images = ["author1.PNG", "author2.PNG", "author3.PNG", "author4.PNG", "author5.PNG", "ac6.PNG"];
let currentImage = 0;
let textContainer = document.querySelector('.text-container');
let scrollSpeed = 0.5; // 可以调整滚动速度
let scrollPosition = 0;

function changeImage() {
    document.querySelector('.img-container').src = url_prefix + images[currentImage];
    currentImage = (currentImage + 1) % images.length;
    setTimeout(changeImage, 10000); // 每12秒更换一次图片
}

function scrollText() {
    let maxScrollHeight = textContainer.scrollHeight - textContainer.clientHeight;
    if (scrollPosition <maxScrollHeight) {
        scrollPosition += scrollSpeed;
        textContainer.scrollTop = scrollPosition;
        requestAnimationFrame(scrollText);
    }
}


textContainer.innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h1>演职人员表（上叙）</h1> <h2>文档架构</h2> <p>breaddddd ColorlessL</p> <h2>内容写作</h2> <p>breaddddd ColorlessL PygmalionCut silverIce</p> <h2>程序开发</h2> <p>AndyBlocker silverIce W Asriel</p>  <h2> UI与美术</h2>  <p> breaddddd silverIce</p> <h2> 测试</h2> <p> Agent Phage ONXY pokm Re_spectators RosaliaXD wlft</p>  <h2> 出场项目作者</h2>  <h3> 钱线项目</h3>  <ul><li>SCP-CN-040 - 做一个威猛先生™ #ApmV</li><li>SCP-CN-206 - 飞行模式 qjfoidnh</li><li>SCP-CN-434 - 开袋百分百有奖 Carpenter_Mark1</li><li>SCP-CN-522 - 地球美食售货机 Agent Phage</li><li>SCP-CN-593 - 許願池 ppp83221</li><li>SCP-CN-803 - 人形售货机 miumeat</li><li>SCP-CN-1066 - “华曦”二手手机交易店 Nan Lihua</li><li>SCP-CN-1129 - 膨化 DouglasLiu</li><li>SCP-CN-1276 - “绝好调回转寿司！” silverIce</li><li>SCP-CN-1881 - 描绘梦想 day by die</li><li>SCP-CN-2303 - 一台手机 Carl Ryzen &amp; HERE IS A BUTTERFLY</li></ul>  <h3> 梦线项目</h3>  <ul><li>SCP-CN-007 - 服务性巨兽 Airalin_Knowledge</li><li>SCP-CN-012 - 液体广告 Epoch_SoC</li><li>SCP-CN-052 - 硬币 Tictoc</li><li>SCP-CN-083 - 画中湖水 miumeat</li><li>SCP-CN-086 - “對著湯匙繞圈子，可以產生龍捲風” M Element</li><li>SCP-CN-349 - 断你WIFI silverIce</li><li>SCP-CN-373 - 模因海洋 karldark</li><li>SCP-CN-380 - LETTERS電競能量飲  EDGE_chi</li><li>SCP-CN-432 - 相声先生 Yoghurt_Jinchouge</li><li>SCP-CN-528 - 三个标准仙人掌 Nitres</li><li>SCP-CN-585 - 一笔兔 breaddddd &amp; miumeat</li><li>SCP-CN-737 - 梦境搬家 breaddddd</li><li>SCP-CN-843 - “金榜题名” miku393</li><li>SCP-CN-962 - 文字游戏 ZENZENZara</li><li>SCP-CN-1394 - 黑点 LPCaCO3</li></ul>  <h3> 爱线项目</h3>  <ul><li>SCP-CN-027 - 囚星蝶 bitchangelover</li><li>SCP-CN-173 - 自定义先生 Veleafer</li><li>SCP-CN-321 - 蹦迪小鸟 CatThorns</li><li>SCP-CN-351 - 赋运神猫 GazerPara</li><li>SCP-CN-352 - 猫抽屉 kalizi</li><li>SCP-CN-383 - 黑暗料理餐厅 breaddddd</li><li>SCP-CN-564 - 你的個人辦公室 MScarlet</li><li>SCP-CN-680 - Wondertainment博士的澡盆大海战®  Light_C</li><li>SCP-CN-812 - 不死妖喵 varitas096</li><li>SCP-CN-925 - 礼帽白鲸 FakeBeluga</li><li>SCP-CN-985 - 考试鲨 EdwardC</li><li>SCP-CN-1061 - 猫之彩 Kanie Ja</li><li>SCP-CN-1211 - 今天起，做一个有梦想的旭蟹 OEOWO3O</li><li>SCP-CN-1296 - 猫枪 Agent Phage</li><li>SCP-CN-1435 - “地狱恶龙魂” VoxTheDog</li><li>SCP-CN-1496 - 鱼伞 Infas12</li><li>SCP-CN-1559 - 青鸟 Re_spectators</li><li>SCP-CN-1922 - 液体猫咪 Agent Phage</li><li>SCP-CN-2067 - 你好，我是赛博猫猫。 pokm</li><li>SCP-CN-2985 - 海上交通大学 Ikaite &amp; CaroyalKKaia</li></ul>  <h3> J线项目</h3>  <ul><li>SCP-CN-，00122 - 第五一模因 Hensec Stutter</li><li>艾斯 瑟 癖 横杠 瑟 恩 横杠 二九六 - 汉字模因 Zihao Huang</li><li>SCP-CN-600 - 巧克力糖果 Areyoucrazytom</li><li>SCP-CN-937-J - 好用的马桶 zhugan</li><li>SCP-CN-970 - 唯手熟尔 varitas096</li><li>SCP-CN-980 - J Veleafer</li><li>SCP-CN-1372 - 鱼竿 ChronoYuki</li><li>SCP-CN-1459 - dado不是很懂尼们二次元 VoxTheDog</li><li>SCP-CN-1987 - 马桶搋子 zhugan</li><li>SCP-CN-2289 - 鸡子涅槃 cqhsama</li><li>SCP-CN-2426 - 麦乐鸡基本主义 Yoghurt_Jinchouge</li><li>SCP-CN-2987 - 不要抬头看 Sharethesilence</li><li>SCP-CN-004-J - 爱因斯坦罗森马桶效应，或虫洞马桶效应 Hilohiroa</li><li>SCP-CN-006-J - 文乎wordのmeme是也です呐♥ 复合型文字模因，又名究极缝合怪 Hourglass_G</li><li>SCP-CN-034-J - 固有印象铲 varitas096</li><li>SCP-CN-048-J - 中二病体验器 JustinTrenchcoat</li><li>SCP-CN-111-J - 美食评判家便便 H-Storm Z</li><li>SCP-CN-321-J - 一个车轱辘 Areyoucrazytom</li><li>SCP-CN-322-J - 走到哪炸到哪 Huskar_CN</li><li>SCP-CN-648-J - 现在我的手中抓住了希望！ breaddddd &amp; Sekai_S</li><li>SCP-CN-888-J - 由于贯彻O5议会第一次会议关于收容异常的决议而被收容的模因官僚主义模因 Agent Solomon</li></ul>  <h3> 开头结尾提及的项目</h3>  <ul><li>SCP-CN-004 - 只一場夢 fuban</li><li>SCP-CN-026 - 不再孤独 thrumuvethur</li><li>SCP-CN-099 - 献花之人 LaAndros</li><li>SCP-CN-118 - 路上小心 AIeditor059</li><li>SCP-CN-210 - 平凡的梦想 Lemontea</li><li>SCP-CN-238 - 星之梦 Flea_ZER0</li><li>SCP-CN-285 - 单人TRPG Minagawa Mamoru</li><li>SCP-CN-288 - 我们为何相聚 Cygnium</li><li>SCP-CN-318 - 他应当被人知晓 Huskar_CN</li><li>SCP-CN-319 - 此处仍有希望。 Huskar_CN</li><li>SCP-CN-398 - 一篇异常的文档 DrSee</li><li>SCP-CN-445 - 一篇不合格的异常文档 EightDao</li><li>SCP-CN-454 - 请保持联系 Yoghurt_Jinchouge</li><li>SCP-CN-458 - 航天胶囊™ qjfoidnh</li><li>SCP-CN-460 - 脑内所想 Idokoe</li><li>SCP-CN-471 - 唯一能为你做的 bokapama</li><li>项目的编号为SCP-CN-533。 合作</li><li>SCP-CN-578 - 如是恒常 HereGoesNothing</li><li>SCP-CN-626 - 项目等级 Lovesicker</li><li>SCP-CN-739 - 一串代码 Wuddy</li><li>SCP-CN-758 - 迷你基金会 CursedL</li><li>SCP-CN-765 - 描述训练 FlameInex</li><li>SCP-CN-848 - 倒数第二重真相 maki_hisane</li><li>SCP-CN-883 - 微小误差 yujiajie</li><li>SCP-CN-982 - 正确的事 leigu</li><li>SCP-CN-984 - 87% 62ECN &amp; #ApmV </li><li>SCP-CN-992 - 危险物品测试 hxzjzrcq</li><li>SCP-CN-1001 - 文字终结于此 LeafJensen</li><li>SCP-CN-1004 - 一切终将逝去 Agent Phage</li><li>SCP-CN-1069 - 你好啊，老朋友 Liu Yii</li><li>SCP-CN-1200 - 余音 W Asriel</li><li>SCP-CN-1256 - 《基金会中分编年史》 Ninth BB</li><li>SCP-CN-1261 - 当你漂泊的时候，不要害怕，因为我会等你  ShineShadowD</li><li>SCP-CN-1286 - 流金岁月 Widednl</li><li>SCP-CN-1301 - 末时赠礼 W Asriel</li><li>SCP-CN-1326 - 信息传输协议 silverIce</li><li>SCP-CN-1344 - 我们每个人的结局 FlameInex</li><li>SCP-CN-1491 - 这可不是什么挽留 yuwen</li><li>SCP-CN-1572 - 预定的流程 sciencekiller &amp; aplous</li><li>SCP-CN-1573 - 特长收容措施 RogerXiao</li><li>SCP-CN-1675 - 欢迎光临 Xiao Tian &amp; 62ECN</li><li>SCP-CN-1715 - 天下没有不散的筵席 breaddddd</li><li>SCP-CN-1716 - 为你撰写的故事，待你谱写的结局 MDreamerM</li><li>SCP-CN-1726 - 秘法配方 pokm</li><li>SCP-CN-1757 - “墓志铭” JosephJoestar</li><li>SCP-CN-1760 - 谢谢惠顾 DawnTang</li><li>SCP-CN-1790 - 然后我们得以生活在阳光之下 sciencekiller</li><li>SCP-CN-1814 - 没玩过的新游戏 bokapama</li><li>SCP-CN-1890 - 应当多加关心基金会员工的精神状态，也许吧 Etinjat</li><li>SCP-CN-1989 - 该轮到你啦 PurpleS0ul_Ding</li><li>SCP-CN-1999 - 幻想遗物 breaddddd</li><li>SCP-CN-2062 - 是。否。否。  DouglasLiu</li><li>SCP-CN-2073 - 鹊桥 nirvana073</li><li>SCP-CN-2088 - 我的新生 diyubianfu</li><li>SCP-CN-2107 - 好梦 Megabytes</li><li>SCP-CN-2131 - 我们有棱角，是为了成为星星 Kcorena</li><li>SCP-CN-2220 - 灵魂所在 All things are one</li><li>SCP-CN-2300 - 1000 ColorlessL</li><li>SCP-CN-2379 - 星落之时 AviliaCelesteria</li><li>SCP-CN-2418 - 归档 Yoghurt_Jinchouge</li><li>SCP-CN-2425 - 回环在我 Agonark</li><li>SCP-CN-2437 - 伴你同行 Dr Fishbone</li><li>SCP-CN-2460 - 你的第一篇skip！ Doctor HHZ</li><li>SCP-CN-2485 - 回声 Arakawa Akira</li><li>SCP-CN-2629（已归档） - 只是一个小玩笑 Unnamed life</li><li>SCP-CN-2638 - “即使故事的结局无法改变……” San Diego 555</li><li>SCP-CN-2640 - “如你所愿”  Coffee_2020 &amp; Vito WV Vital</li><li>SCP-CN-2646 - 死亡从未是终点 Hopeless_Xenophobia</li><li>SCP-CN-2649 - 但这不是全貌 HOMESICK</li><li>SCP-CN-2662 - 一朝梦境，一影随行 Jiu_Huan</li><li>SCP-CN-2669 - 回忆永驻 Brain of brain &amp; Maybe-ABS</li><li>SCP-CN-2676 - 自成逻辑 asAlpha</li><li>SCP-CN-2678 - ……直到大厦崩塌 W Asriel</li><li>SCP-CN-2696 - 一路顺风 HuaNianQWQ</li><li>SCP-CN-2785 - “星”代表“咫尺” HuaNianQWQ</li><li>SCP-CN-2795 - “我”于你们之中 Kanie Ja</li><li>SCP-CN-2805 - 一份普通的基金会档案 Blinder4</li><li>SCP-CN-2810 - 让她睡吧 two cat</li><li>SCP-CN-2820 - 减少收容失效的可能性。 Dr Hormress</li><li>SCP-CN-2823 - 唯一指向性结局 Chris Evertworth</li><li>SCP-CN-2989 - 在场证明 Etinjat</li><li>SCP-CN-2995 结束了吗？ Dr_Naxurt</li><li>SCP-CN-2997 - █000 LeafJensen</li></ul>  <h3> 文内彩蛋提及的项目</h3>  <ul><li>SCP-CN-333 - 擦脚巾 EdwardC</li><li>SCP-CN-546 - 我们的秘密 ppp83221</li><li>SCP-CN-767 - 图表症 breaddddd</li><li>SCP-CN-954 - :v Kannou_Natsuko</li><li>SCP-CN-1028 - 晒月亮 Loaf_Loaf</li><li>SCP-CN-1171 - 巧克力烤面包 breaddddd</li><li>SCP-CN-1713 - 一种近期发现的具备传染性模因效应及元数据影响效应的异常项目 PC-DOS</li><li>SCP-CN-1830 - 海蛞蝓奶茶店 miumeat</li><li>SCP-CN-123-J - 到底需要几个小便池？Huskar_CN</li><li>SCP-CN-166-J - 红唇之神 Voice Yin</li><li>SCP-CN-830-J - 厕所幽灵 miumeat</li></ul>  <h2> 制作人员表的图片中额外出现的项目</h2>  <ul><li>SCP-CN-199 - 婚紗 Areyoucrazytom</li><li>SCP-CN-453 - 画中盗婴 dongdong37</li><li>SCP-CN-577 - 不会扭缠的耳机 bitchangelover</li><li>SCP-CN-586 - 一个信息危害 EdwardC</li><li>SCP-CN-608 - “圣诞节快乐！” San Diego 555</li><li>SCP-CN-648 - “这样你就是完美的……” San Diego 555</li><li>SCP-CN-735 - 西瓜这么可爱你们为什么要吃它 Arthur Tomb &amp; Night Raven</li><li>SCP-CN-775 - 瘦腿袜 bokapama</li><li>SCP-CN-828 - 餐后甜点 maki_hisane</li><li>SCP-CN-834 - Q弹黄瓜！ Veleafer</li><li>SCP-CN-835 - “断肢” Baiyan</li><li>SCP-CN-918 - 永远漂泊的纸飞机 qjfoidnh</li><li>SCP-CN-964 - 我要打开蓝牙听一会儿歌 Veleafer</li><li>SCP-CN-993 - 旅行相机 breaddddd</li><li>SCP-CN-999 - 《展翅高飛》 MScarlet</li><li>SCP-CN-1008 - 存物U盘 DaVinci 2nd</li><li>SCP-CN-1043 - 强力电蚊拍 守护者之剑 Fisher Yu</li><li>SCP-CN-1083 - 盐与胡椒国际象棋 miumeat</li><li>SCP-CN-1099 - 沙丁鱼罐头 Amazing_Mel8346</li><li>SCP-CN-1107 - 风扇 Sylvia_Blank</li><li>SCP-CN-1303 - 电池，来自隔壁宇宙的电池 WhatVR</li><li>SCP-CN-1307 - 精神选择透过性膜 St1020</li><li>SCP-CN-1383 - 该队伍由“Lemon OBserver”牌汽水赞助 miumeat</li><li>SCP-CN-1407 - 贪婪而又饥饿的厨师帽 anyElen</li><li>SCP-CN-1422 - 某科学的生肖邮票 R ICD</li><li>SCP-CN-1517 - Wondertainment博士的小小成年人套装 Keyest</li><li>SCP-CN-1587 - 剧组精美奢华典藏版合集 Bluecat Error</li><li>SCP-CN-1609 - 打伞人 Yoghurt_Jinchouge</li><li>SCP-CN-1669 - 只是一份生日礼物 TheDreamKiller</li><li>SCP-CN-1767 - 爸爸的妈妈叫什么？ Diamond_Apple</li><li>SCP-CN-1837 - 居合斩U盘 bitchangelover</li><li>SCP-CN-1887 - 穿上这件杨超越 orange-orange</li><li>SCP-CN-1926 - 羽毛蟲蛋塔 M Element</li><li>SCP-CN-1958 - 速食文明 Carpenter_Mark1</li><li>SCP-CN-1970 - 胶片相机 Meowait</li><li>SCP-CN-1981 - 梦见路由器 Sai_rai</li><li>SCP-CN-1991 - 急行电车 breaddddd</li><li>SCP-CN-2014 - 花园特供冰激凌 haplocalyx</li><li>SCP-CN-2058 - 扭曲笔记本 Area35_zt</li><li>SCP-CN-2089 - 冰峰 waaaan</li><li>SCP-CN-2441 - 瞳孔涣散 ColoredBucket</li><li>SCP-CN-2651 - You are always my hero the Jotaro</li><li>SCP-CN-2733 - 大渡海。 Quisqualis</li><li>SCP-CN-2427 - 原味炸鸡食用准则 Yoghurt_Jinchouge</li><li>SCP-CN-2741 - 卑躬屈膝，奴像尽显 A yuhan</li></ul>  <h3> 废案中涉及的项目</h3>  <ul><li>SCP-CN-025 - 倾覆 DrSee</li><li>SCP-CN-424 - 烘焙交响乐 breaddddd</li><li>SCP-CN-570 - 寂靜的音樂 MScarlet</li><li>SCP-CN-756 - 数量之书 Dr. Fujino</li><li>SCP-CN-768 - 工作站 Toooajk</li><li>SCP-CN-830 - 养猫模拟器：猫猫大混乱！ miumeat</li><li>SCP-CN-1000 - 2300 infas12</li><li>SCP-CN-1041 - 办公人员宠物套装（猫用） Elena Coli</li><li>SCP-CN-1114 - 鼠标之父 Harrison Wang</li><li>SCP-CN-1462 - 弹寿司 CaroyalKKaia</li><li>SCP-CN-1540 - dado稀饭听摇滚 Lesionner</li><li>SCP-CN-1621 - dado也响变成猫 Yoghurt_Jinchouge</li><li>SCP-CN-1816 - 俺小猫尝来像百事可乐 Flea_ZER0</li><li>SCP-CN-2463 - 加速深蓝 NoelleFavonius &amp; sciencekiller</li></ul>  <h2> 文档参考 & 特别感谢</h2>  <ul><li>SCP-3301 - 基金会大游戏 djkaktus</li><li>SCP-CN-1109 - 朗基努斯计划 Sekai_S</li></ul>  <p> 感谢基金会各分部所有成员一直以来的创作 以及看到这里的你</p> ";



// 启动动画
changeImage();
requestAnimationFrame(scrollText);
