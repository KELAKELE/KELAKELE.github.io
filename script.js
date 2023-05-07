function sayHello(){
  var response=prompt("你的名字");
  alert("你好 ,外来的旅行者" + response + "！欢迎来到原神世界");
}
sayHello()

function count()
{
	var cores=0;
	var questions=document.getElementsByClassName("wen")
	for(var i=0;i<questions.length;i++)
	{
		var count=0;
		var flag=1;
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<0)
				{
					flag=0;
					break;
				}
				else
					count+=answer[j].value*1;
			}
		}
		if(flag==1)
			cores+=count;
	}
  if(cores==3)
	 alert("你转生为安全感爆棚的琴团长");
  else if(cores==5)
	 alert("你转生为酒蒙子风神温迪");
  else if(cores==7)
	 alert("你转生为可爱小砂糖捏~");
  else if(cores==16)
	 alert("你转生为不认识的阿贝多老师");
  else if(cores==13)
	 alert("你转生为乖巧女仆诺埃尔");
  else if(cores==56)
	 alert("你转生为丽莎阿姨");
  else if(cores==53)
	 alert("你转生为小狼王雷泽");
  else if(cores==54)
	 alert("你转生为小艾咪菲谢尔");
  else if(cores==305)
	  alert("你转生为提瓦特第三穷鬼莫娜，或者蒙德偶像芭芭拉。。。");
  else if(cores==602)
	  alert("你转生为最倒霉的火神班尼特");
  else if(cores==606)
	  alert("你转生为喜欢炸鱼的可莉");
  else if(cores==603)
	  alert("你转生为暗夜迪卢克");
  else if(cores==604)
 	  alert("你转生为飞行冠军安柏");
  else if(cores==15)
 	  alert("你转生为杏仁豆腐真君魈");
  else if(cores==25)
    alert("你转生为白富美凝光姐姐");
  else if(cores==113)
    alert("你转生为小狗狗五郎");
  else if(cores==24)
    alert("你转生为岩王帝君·摩拉克斯·钟离大人");
  else if(cores==61)
    alert("你转生为璃月人自己的雷神刻晴姐姐");
  else if(cores==62)
    alert("你转生为爱探险的北斗");
  else if(cores==215)
    alert("你转生为流水池最低的白术");
  else if(cores==214)
    alert("你转生为可可爱爱小瑶瑶");
  else if(cores==311)
    alert("你转生为二小姐行秋");
  else if(cores==313)
    alert("你转生为超模夜兰姐姐");
  else if(cores==615)
    alert("你转生为萌新妈妈烟绯");
  else if(cores==612)
    alert("你转生为爱唱歌弹电吉他的辛焱");
  else if(cores==614)
    alert("你转生为提瓦特第一火c往生堂堂主胡桃");
  else if(cores==911)
    alert("你转生为痛苦小77");
  else if(cores==903)
    alert("你转生为最长时间不复刻的绝版角色优菈");
  else if(cores==912)
    alert("你转生为有漂亮小姨的捉鬼师重云");
  else if(cores==913)
    alert("你转生为提瓦特第一冰弓c可爱椰羊甘雨姐姐");
  else if(cores==904)
    alert("你转生为小猫猫迪奥娜");
  else if(cores==914)
    alert("你转生为最最好看的小姨最强冰辅申鹤");
  else if(cores==905)
    alert("你转生为建模奇怪的罗莎莉亚");
  else if(cores==102)
    alert("你转生为叶天帝万叶宝贝");
  else if(cores==106)
    alert("你转生为最强大脑小小侦探鹿野院平藏");
  else if(cores==103)
    alert("你转生为爱睡觉的小早柚");
  else if(cores==151)
    alert("你转生为恋爱脑久岐忍");
  else if(cores==155)
    alert("你转生为狐仙姐姐粉粉的八重神子大人");
  else if(cores==153)
    alert("你转生为忠诚正直的最强雷辅九条裟罗");
  else if(cores==154)
    alert("你转生为胸中拔刀第一人不会做饭的雷电将军");
  else if(cores==1001)
    alert("你转生为神里大小姐神里凌华");
  else if(cores==902)
    alert("你转生为黑皮体育生凯亚");
  else if(cores==653)
    alert("你转生为提瓦特第一火弓c放烟花的宵宫姐姐");
  else if(cores==654)
    alert("你转生为没什么存在感的托马");
  else if(cores==614)
    alert("你转生为会用锅巴喷火的香菱");
  else if(cores==401)
    alert("你转生为爱喝奶茶的神里绫人");
  else if(cores==405)
    alert("你转生为美丽的观赏鱼珊瑚宫心海");
  else if(cores==403)
    alert("你转生为愚人众公子达达利亚");
  else if(cores==112)
    alert("你转生为傻不拉几荒泷一斗");
  else if(cores==205)
    alert("你转生为三蹦子流浪者爱骂人的伞兵");
  else if(cores==204)
    alert("你转生为风辅贵妃娘娘珐露珊");
  else if(cores==252)
  alert("你转生为黑心商人多莉");
  else if(cores==254)
    alert("你转生为大风纪官赛诺");
  else if(cores==401)
    alert("你转生为185猛男艾尔海森");
  else if(cores==405)
    alert("你转生为小小一只的小草神纳西妲");
  else if(cores==402)
    alert("你转生为死傲娇卡维");
  else if(cores==403)
    alert("你转生为有长长的毛茸茸耳朵的提纳里，或者他的徒弟小柯莱");
  else if(cores==501)
    alert("你转生为爱跳舞的小姑娘妮露");
  else if(cores==504)
    alert("你转生为黑皮成女异瞳坎蒂丝");
  else if(cores==802)
    alert("你转生为大狮子迪希雅");
  else if(cores==1105)
      alert("你转生为能在战场上睡觉的莱依拉");
  else {
  alert("目前没有这个角色，再试试吧")
}





}
