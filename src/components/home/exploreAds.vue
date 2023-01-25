<template>
<div class="explore-section">
        <div class="container">

            <div class="main-title media">
                <h3 class="main-tit-text">تصفح الإعلانات</h3>

                <div class="title-inputs">
                    <form action="" class="search">
                        <input type="text" placeholder="ابحث" class="search-input">
                        <button type="submit" class="search-icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <form action="" class="search" data-bs-toggle="modal" data-bs-target="#filterModal">
                        <input type="text" placeholder="فلتر حسب" class="search-input">
                        <button type="button" class="search-btn">
                            <img :src="toggle" alt="">
                        </button>
                    </form>
                </div>

            </div>

            <div class="eplore-cards">

                <div class="explore-card" v-for="card in adsCards" :key="card">
                    <div class="card-container">
                        <a href="ads-detailes.html"></a>
                        <div class="explore-card-head">
                            <img :src="card.user" alt="">
                        </div>
                        <div class="explore-card-body">
                            <h3 class="ads-title"> {{ card.adsTittle }} </h3>
                            <p class="ads-city">{{ card.address }} </p>
                            <span class="ads-price">{{ card.price }} </span>
                        </div>
                    </div>
                    <div class="explore-card-footer">
                        <a href="profile.html" class="profile">
                            <img  class="profile-img" :src="card.user" alt="">
                            <span class="profile-name">{{ card.cardOwner }} </span>
                        </a>
                        <div class="favorite-icon">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>




        <!-- adsfilterModal -->
        <div class="modal fade filter-modal" id="filterModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <div class="content-model-me">

                    <form action="" class="modal-form">
                        <div class="modal-header">
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-main-tab" data-bs-toggle="pill" data-bs-target="#pills-main" type="button" role="tab" aria-controls="pills-main" aria-selected="true">قسم رئيسيي</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-sub-tab" data-bs-toggle="pill" data-bs-target="#pills-sub" type="button" role="tab" aria-controls="pills-sub" aria-selected="false">قسم فرعي</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-city-tab" data-bs-toggle="pill" data-bs-target="#pills-city" type="button" role="tab" aria-controls="pills-city" aria-selected="false">المدينة</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-type-tab" data-bs-toggle="pill" data-bs-target="#pills-type" type="button" role="tab" aria-controls="pills-type" aria-selected="false">النوع</button>
                                </li>
                            </ul>
                            
                        </div>

                        <div class="modal-body">
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-main" role="tabpanel" aria-labelledby="pills-main-tab" tabindex="0">
                                    <div class="row">
                                        <div class="col-md-8 mx-auto">
                                            <div class="check-boxs">
                                                <div class="row gy-3">

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="main" id="main">
                                                            <label for="main">الكترونيات</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="main1" id="main1">
                                                            <label for="main1">أزياء</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="main2" id="main2">
                                                            <label for="main2">شنط</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="main3" id="main3">
                                                            <label for="main3">ألعاب</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="main4" id="main4">
                                                            <label for="main4">مطاعم</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="main5" id="main5">
                                                            <label for="main5">فنادق</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="main6" id="main6">
                                                            <label for="main6">اكسسوارات</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-sub" role="tabpanel" aria-labelledby="pills-sub-tab" tabindex="0">
                                    <div class="row">
                                        <div class="col-md-8 mx-auto">
                                            <div class="check-boxs">
                                                <div class="row gy-3">

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="sub1" id="sub1">
                                                            <label for="sub1">الكترونيات</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="sub2" id="sub2">
                                                            <label for="sub2">أزياء</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="sub3" id="sub3">
                                                            <label for="sub3">شنط</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="sub4" id="sub4">
                                                            <label for="sub4">ألعاب</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="sub5" id="sub5">
                                                            <label for="sub5">مطاعم</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="sub6" id="sub6">
                                                            <label for="sub6">فنادق</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="sub7" id="sub7">
                                                            <label for="sub7">اكسسوارات</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-city" role="tabpanel" aria-labelledby="pills-city-tab" tabindex="0">
                                    <div class="row">
                                        <div class="col-md-8 mx-auto">
                                            <div class="check-boxs">
                                                <div class="row gy-3">

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="city1" id="city1">
                                                            <label for="city1">الرياض</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="city2" id="city2">
                                                            <label for="city2">الدمام</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="city3" id="city3">
                                                            <label for="city3">جدة</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="city4" id="city4">
                                                            <label for="city4">جدة</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="city5" id="city5">
                                                            <label for="city5">الرياض</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="city6" id="city6">
                                                            <label for="city6">الدمام</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="city7" id="city7">
                                                            <label for="city7">الرياض</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-type" role="tabpanel" aria-labelledby="pills-type-tab" tabindex="0">
                                    <div class="row">
                                        <div class="col-md-8 mx-auto">
                                            <div class="check-boxs">
                                                <div class="row gy-3">

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="type1" id="type1">
                                                            <label for="type1">جديد</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-4 col-6">
                                                        <div class="check">
                                                            <input type="checkbox" name="type2" id="type2">
                                                            <label for="type2">مستعمل</label>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="modal-footer">
                            <div class="buttons-m">
                                <button class="main-btn dark md up" type="submit" data-bs-dismiss="modal" aria-label="Close">بحث</button>
                                <button class="main-btn transparent md up" type="submit" data-bs-dismiss="modal" aria-label="Close">حذف</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            ads : require('../../assets/imgs/ads3.jpeg'),
            toggle : require('../../assets/imgs/icons8-slider-50.png'),
            adsCards : [
                {adImage : require('../../assets/imgs/ads3.jpeg'), adsTittle : "اعلان عن لابتوب" , address : "الرياض-السعودية" ,price : "2500 رس" , cardOwner : "محمد احمد" , user : require('../../assets/imgs/profile.jpg'), }
            ]
        }
    }
}
</script>

<style>

</style>