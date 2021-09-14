
# CustomerCartRestAPI-nodeJS

<b>NodeJS & MongoDB </b> Kullanılarak; Random Customer / CustomerCart / Product Oluşturulan, Sonrasında Oluşturulan Random Data lar İçerisinden Şehire Göre Alışveriş Miktar ve Fiyat Analizi Yapan Basit Bir RestAPI Çalışmasıdır.

### Used Packages:

#### <li> Express <a href ="https://www.npmjs.com/package/express">Package Link</a> </li>
#### <li> Mongoose <a href ="https://www.npmjs.com/package/mongoose">Package Link</a> </li>
#### <li> faker <a href ="https://www.npmjs.com/package/faker">Package Link</a> </li>



### Nasıl Kullanılır ?

#### <li> Projeyi Bilgisayarınıza İndirin / Clone layın</li>
```
git clone https://github.com/baynarkozcu/CustomerCartRestAPI-nodeJS
```


#### <li> Proje Dizinine Girin</li>
```
cd CustomerCartRestAPI-nodeJS
```



#### <li> Npm Packages ları Projenize Dahil Edin</li>
```
npm i
```

#### <li> Projeyi Çalıştırın</li>
```
node app.js
```

#### <li> Postman veya Benzeri Bir POST İsteği Gönderbileceğiniz Uygulamayı Açın ve Aşağıdaki Linke {musteriAdet} & {sepetAdet}  Parametreleriyle POST İsteğinde Bulunun</li>
```
http://localhost:8000/generate?musteriAdet=#&sepetAdet=#

```

![Screenshot_1](https://user-images.githubusercontent.com/61154446/133313319-a8312e96-639c-4186-baec-ab9a31959dc2.png)
<br>

#### <li> Son Olarak Verilerin Analizi için Aşağıdaki Linke GET İsteğinde Bulunun.</li>

```
http://localhost:8000/analiz
```

## Analiz Çıktısı :
<br>
<div align="center"> <b> {Şehir Adı} &nbsp;&nbsp;&nbsp;&nbsp; -- &nbsp;&nbsp;&nbsp;&nbsp; {Şehire Ait Toplam Sepet Miktarı} &nbsp;&nbsp;&nbsp;&nbsp; -- &nbsp;&nbsp;&nbsp;&nbsp;  {Şehire Ait Toplam Sepet Tutarı} </b> </div>
<br>
<br>

![Screenshot_8](https://user-images.githubusercontent.com/61154446/133309690-46abf428-d399-482a-97aa-0bee75f2bdd6.png)
