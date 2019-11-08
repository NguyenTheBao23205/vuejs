<template>
  <div>
    <h1>Home</h1>
    <div class="check">
      <input type="checkbox" id="bong-da" value="Bóng đá" v-model="checkedNames" />
      <label for="bong-da">Bóng đá</label>
      <br />
      <input type="checkbox" id="cau-long" value="Cầu lông" v-model="checkedNames" />
      <label for="cau-long">Cầu lông</label>
      <br />
      <input type="checkbox" id="bong-chuyen" value="Bóng chuyền" v-model="checkedNames" />
      <label for="bong-chuyen">Bóng chuyền</label>
      <br />
      <span>Chọn môn thể thao bạn thích: {{ checkedNames }}</span>
    </div>
  </div>
</template>
<script>
export default {
    data() {
    return {
      checkedNames: []
    };
  }
};
</script>