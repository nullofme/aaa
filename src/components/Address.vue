<template>
  <div class="Address">
    <Header>选择地址</Header>
    
    <div class="container">
         <div>
           <select v-model="prov">
              <option v-for="option in arr" :value="option.name">
                 {{ option.name }}
               </option>
          </select>
         </div>
          <div>
            <select v-model="city">
                <option v-for="option in cityArr" :value="option.name">
                    {{ option.name }}
                </option>
            </select>
          </div>
          <div>
            <select v-model="district">
                <option v-for="option in districtArr" :value="option">
                    {{ option}}
                </option>
            </select>
          </div>
    </div>
    <span>{{prov}} {{city}} {{district}}</span>

     <div class="address_2">
        <el-select v-model="prov" placeholder="请选择">
            <el-option  v-for="item in arr" :value="item.name"></el-option>
        </el-select>
        <el-select v-model="city" placeholder="请选择">
            <el-option  v-for="item in cityArr" :value="item.name"></el-option>
        </el-select>
        <el-select v-model="district" placeholder="请选择">
            <el-option  v-for="item in districtArr" :value="item"></el-option>
        </el-select>
     </div>
  </div>
</template>
<script>
import Header from "../base/Header.vue";
import { provinceList } from "../api";
export default {
  data() {
    return { 
            arr: provinceList,
            prov: '北京',
            city: '北京',
            district: '东城区',
            cityArr: [],
            districtArr: [],
          }
  },
  created() {
      console.log(this.arr)
  },
  components:{
    Header
  },
   methods: {
    handleChange(value) {
        console.log(value);
      },
            updateCity: function () {
                for (var i in this.arr) {
                    var obj = this.arr[i];
                    if (obj.name == this.prov) {
                        this.cityArr = obj.cityList;
                        break;
                    }
                }
                this.city = this.cityArr[0].name;
            },
            updateDistrict: function () {
                for (var i in this.cityArr) {
                    var obj = this.cityArr[i];
                    if (obj.name == this.city) {
                        this.districtArr = obj.areaList;
                        break;
                    }
                }
                if(this.districtArr && this.districtArr.length > 0 ) {
                    this.district = this.districtArr[0];
                } else {
                    this.district = '';
                }
            }
        },
  beforeMount: function () {
      this.updateCity();
      this.updateDistrict();
  },
  watch: {
      prov: function () {
          this.updateCity();
          this.updateDistrict();
      },
      city: function () {
          this.updateDistrict();
      }
  }
};
</script>
<style scoped='false'>
.address_2{
    display: flex;
    margin-top:100px;
}
.address_2 .el-input{
   width: 150px;
}
.container{
  display:flex;
  flex:1;
  margin-top:40px;
}
select{
  display:block;
  width:100px;
}
ul {
  padding: 20px;
}
li {
 
  display: flex;
  flex-direction: column;
}
input {
  width: 90%;
  height: 30px;
}
button {
  display: block;
  outline: none;
  width: 100px;
  height: 40px;
  background: green;
  margin: 30px auto;
  color: #fff;
  border: none;
}
span{
  display:block;
  padding-top:60px
}
</style>

