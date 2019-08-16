---
layout: post
title:  "Javascript Püf Noktaları"
date:   2017-05-29 02:51:15 +0300
categories: javascript
---

Javascript için kullanabileceğiniz işinizi kolaylaştıracak kısa önerileri bu yazıda bulabilirsiniz.

<br>

Dizi içerisinde gezme işlemleri

<h6>Normal Yöntem</h6>

{% highlight javascript %}
let array = [1,2,3,4,5];

for(let i = 0; i < array.length; i++)
{
    console.log(array[i]);
}
{% endhighlight %}

<h6>Pratik Yöntem</h6>

{% highlight javascript %}
let array = [1,2,3,4,5];

array.forEach(member => {
    console.log(member);
});
{% endhighlight %}

<hr>
<br>

Dizi aktarma işlemleri

<h6>Normal Yöntem</h6>

{% highlight javascript %}
let array = [1,2,3,4,5];
let tempArray = [];

for(let i = 0; i < array.length; i++)
{
    tempArray.push(array[i]);
}
{% endhighlight %}

<h6>Pratik Yöntem</h6>

{% highlight javascript %}
let array = [1,2,3,4,5];

let tempArray = array.map(member => {
    return member;
});
{% endhighlight %}

<hr>
<br>

Dizi filtreleme işlemleri

<h6>Normal Yöntem</h6>

{% highlight javascript %}
let array = [1,2,3,4,5];
let tempArray = [];

for(let i = 0; i < array.length; i++)
{
    if(array[i] > 3)
    {
        tempArray.push(array[i]);
    }
}
{% endhighlight %}

<h6>Pratik Yöntem</h6>

{% highlight javascript %}
let array = [1,2,3,4,5];

let tempArray = array.filter(member => member > 3; );
{% endhighlight %}

<hr>
<br>