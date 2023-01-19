alert("若超過一個答案直接輸入即可 EX:1+1=? (a)2 (b)1+1 (c)4-2 輸入abc即答對" )
var questions = 
        [
            {
                prompt:"最愛你的人是誰? (a) 李哲睿 (b) 花心傑睿 (c) JerryLi",
                answer:"abc"
            },
            {
                prompt:"李哲睿最愛的人是誰? (a) 蕭婉忻 (b) 婉忻寶包 (c) Chelsea",
                answer:"abc"
            },
            {
                prompt:"下列哪一組是甜甜蜜蜜的情侶檔? (a) 花心傑睿&虎哩愛愛不完 (b) 李哲睿&蕭婉忻 (c) Jerry&Chelsea",
                answer:"abc"
            }
        ]
        

        var score = 0;
        for(var i = 0 ; i < questions.length; i++)
        {
            var input = prompt(questions[i].prompt);
            if(input==questions[i].answer)
            {
                score++;
                alert("答對了!");
            }
            else
            {
                alert("答錯了!");
            }
        }   
        alert("婉忻寶包答對了" + score + "題!")
        if( score == 3)
        {
            alert("請看李哲睿!!")
        }