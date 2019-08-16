---
layout: post
title:  "Angular CLI Kullanımı"
date:   2017-04-02 21:56:11 +0300
categories: angular
---

Öncelikle angular cli için sisteminizde nodejs kurulu olmalıdır.

<br>

Angular cli kurulumu

{% highlight shell %}
npm install -g @angular/cli
{% endhighlight %}

Yeni proje oluşturma

{% highlight shell %}
ng new projectName
{% endhighlight %}

Projeyi derleme

{% highlight shell %}
ng build
{% endhighlight %}

Projeyi çalıştırma

{% highlight shell %}
ng serve
{% endhighlight %}

Projeyi yayınlama

{% highlight shell %}
ng build --prod
{% endhighlight %}

Yeni component oluşturma

{% highlight shell %}
ng g c newComponentName
{% endhighlight %}

Yeni service oluşturma

{% highlight shell %}
ng g s newServiceName
{% endhighlight %}