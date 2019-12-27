<template>
   <div id="container">
    <div>
     <img id="img1" src="../assets/community/1_03.png" alt="">
     <h3 style="margin-left:7rem">欢迎来到宝宝社区</h3>
     <van-notice-bar
      text="欢迎来到本社区,即日起专家讲师在线免费分享宝宝健康成长经验"
      left-icon="volume-o"/>

      <!-- <input type="text" placeholder="宝宝成长计划"><button>搜索</button> -->
      <van-search placeholder="请输入搜索关键词" v-model="value" />
     </div>
        <!-- 小图标基础用法 -->
        <div style="display:flex;justify-content:space-around">
            <div>
              <img style="width:60%;margin-top:0.3rem;margin-left:1rem" src="../assets/community/食谱.png" alt="">
              <a href="javascript:;"><h6>食谱</h6></a>
            </div>
            <div>
              <img style="width:60%;margin-top:0.3rem;margin-left:1rem" src="../assets/community/听听内容.png" alt="">
              <a href="javascript:;"><h6>听听</h6></a>
            </div>
             <div style="margin-top:0.4rem">
              <img style="width:50%;margin-top:0.3rem;margin-left:1.5rem" src="../assets/community/百科 (1).png" alt="">
              <a href="javascript:;"><h6>百科</h6></a>
            </div>
             <div>
              <img style="width:60%;margin-top:0.3rem;margin-left:1.1rem" src="../assets/community/问答.png" alt="">
              <a href="javascript:;"><h6>问答</h6></a>
            </div>
        </div>
    
        <img src="../assets/community/1_02.png" style="width:100%" alt=""> 
        <h4 style="margin-left:2rem">-----------------------知识专题-----------------------</h4>
        <div style="background-color:#f7f7f7; ">
          <div style="margin-left:2rem">
            <img id="yuner" src="../assets/community/婚前备孕 (1).png" alt=""><a href="">备孕</a>
            <img id="yuner" src="../assets/community/怀孕 (2).png" alt=""><a href="">怀孕</a>
            <img id="yuner" src="../assets/community/yr.png" alt=""><a href="">0-1岁</a>
            <img id="yuner" src="../assets/community/yinger_1.png" alt=""><a href="">1-2岁</a>
            <img id="yuner" src="../assets/community/yinger.png" alt=""><a href="">2-3岁</a>
          </div>
        </div>
       
        <div id="div1">      
        <img id="img3" src="../assets/community/6d81800a19d8bc3e9151ba0b868ba61ea9d34591.jpg"  alt="">
        <h5 style="width:100%;margin-top:-0.1rem;margin-left:0.3rem">添加辅食结束期食谱:油豆腐韭菜饭 <h6 style="margin-top:8px">材料 | 稠饭40g，土豆15g，油豆腐、韭菜各5g,水3大勺
          1. 将油豆腐焯水，去除表面油脂和杂物。控干切碎
          2. 将韭菜和土豆切至5mm大小
          3. 热锅中加少许食用油，将切碎的油豆腐、韭菜、土豆入锅翻炒片刻，加入稠饭，搅拌均匀即可。
          </h6></h5>     
         </div>
         <div id="div1">
         <img id="img3" src="../assets/community/686dfd05c327d170c76b8ca_nb.jpg" alt="">
         <h5 style="width:100%;margin-top:-0.1rem;margin-left:0.1rem">怎样规律宝宝作息时间 <h6 style="margin-top:8px">
营造一个好的睡眠空间，生活中很多因素都会影响宝宝的睡眠，所以要注意全方面的进行调理，要把室内的温度控制好，另外可以在睡觉前给宝宝喝一杯牛奶，这样有助于宝宝的入睡，还要注意在宝宝睡觉的时候，不能有太大的声音出现。
          </h6></h5>  
          </div>  
          <h4 style="margin-left:3rem">-----------------宝宝健康中心------------------</h4> 
           <div>
         <img style="width:50%;margin-left:5rem;" src="../assets/community/u=4086292671,3756374969&fm=173&app=49&f=JPEG.jpg" alt="">
         <h5 style="width:100%;margin-top:-0.1rem;margin-left:0.1rem">宝宝发烧怎么物理降温 <h6 style="margin-top:8px">
如果孩子仅有高热，没有各种合并症出现，尽管退烧缓慢，或者时有反复，也不必担心，应该耐心在家中治疗、护理，可采取如下措施：

1、保持环境安静、舒适、湿润，室内定时通风，成人不要吸烟。

2、发烧是机体对抗微生物入侵的保护性反应，有益于增强机体抵抗力，因此38.5℃以下的体温不必服退热药，只有体温超过38.5℃以上，才需采取退烧措施。

3、病儿的衣服不宜穿得过多，被子不要盖得太厚，更不要捂汗”，以免影响散热，使体温温升得更高。

4、要鼓励孩子多喝开水多吃水果。发热后孩子食欲减退，可准备一些易于消化的饭菜，选择孩子体温不高，或吃药退烧的时机进食，但不要吃得太饱。
          </h6></h5>  
        </div>
          <div>
         <img style="width:50%;margin-left:5rem;" src="../assets/community/u=3462285731,1819549802&fm=173&app=49&f=JPEG.jpg" alt="">
         <h5 style="width:100%;margin-top:-0.1rem;margin-left:0.1rem">一岁宝宝感冒咳嗽流鼻涕怎么办？这6种做法很有用<h6 style="margin-top:8px">
           1.保持空气流通

大家要注意保持空气流通，并做好宝宝的保暖工作。另外，大家要让宝宝多喝水，这样对缓解宝宝感冒咳嗽流鼻涕很有帮助。

2.及时擤鼻涕

宝宝还小，感冒流鼻涕，自己还不会擤。如果鼻涕不及时处理掉，不但有可能会影响体内毒素排出，还有可能会妨碍宝宝的正常呼吸。大家要及时帮助宝宝擤鼻涕，保证呼吸畅通和毒素顺利排出，这对于宝宝身体康复很有好处。

3.喂适量蜂蜜水

在杯中加入适量蜂蜜，用开水冲开后调匀。宝宝喝蜂蜜水不但可以止咳，还可以改善睡眠质量。蜂蜜水有很好的止咳疗效，不过一岁以下宝宝不能适用此法。
          </h6></h5>  
        </div>
<<<<<<< HEAD
=======
        <div style="margin-bottom:3.5rem;"></div>
>>>>>>> 5fcb467a51f226ec088236b77566680122e28438
   </div>         
</template>

<script>
export default {
      data(){
        return{
          value:''
        }
      }
}
</script>

<style scoped>
    #div1{
      display:flex;
      justify-content:start;
      margin-top:1rem;
    }
    /* #container{
      display:flex;
    } */
    #img1{
      margin-top:1.2rem;
      margin-left:10rem;
    }
    van-swipe img{
      width:100%;
      height:100%;
    }
    mycanvas{
      background-image:url("../assets/community/1_03.png");
      background-size:100%;
    }
    #yuner{
      width:6%;
    }
    a{
      height:1rem;
      text-align: center;
      line-height:1rem;
      color:lightslategray
    }
    #img3{
     width:30%;
     height:100%;
      position: relative;
      /* left:-8rem */
    }
    h6{
      color:slategray
    }
</style>