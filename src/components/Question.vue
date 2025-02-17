<template>
  <div class="items-center justify-center">
    <div
      class="w-[22vw] h-[60vh] mt-[10vh] mr-[2vw] bg-nusajarSecondary rounded-lg shadow-md p-4"
    >
      <div class="text-[1.7vh] text-center">
        <h1 class="font-semibold text-red-500">
          <span class="text-nusajarPrimaryDark">Waktu Tersisa: </span>00:30
        </h1>
      </div>
      <div class="text-[1.7vh] text-center">
        <h1 class="font-semibold text-3xl text-nusajarPrimary">
          Pertanyaan untuk prabobo
        </h1>
      </div>
      <div class="w-[16vw] mx-auto">
        <p class="text-center font-bold text-[2vh]">BERAPA IPK FUFUFAFA ?</p>
        <label
          class="block pb-[2vh] text-[1.7vh] hover:text-nusajarPrimaryDark transition-colors duration-200"
          ><input type="radio" name="mcq" value="a" />4.0</label
        >
        <label
          class="block pb-[2vh] text-[1.7vh] hover:text-nusajarPrimaryDark transition-colors duration-200"
          ><input type="radio" name="mcq" value="b" />2.3</label
        >
        <label
          class="block pb-[2vh] text-[1.7vh] hover:text-nusajarPrimaryDark transition-colors duration-200"
          ><input type="radio" name="mcq" value="c" />10.0</label
        >
        <label
          class="block pb-[2vh] text-[1.7vh] hover:text-nusajarPrimaryDark transition-colors duration-200"
          ><input type="radio" name="mcq" value="d" />3.5</label
        >
        <label
          class="block pb-[2vh] text-[1.7vh] hover:text-nusajarPrimaryDark transition-colors duration-200"
          ><input type="radio" name="mcq" value="e" />3.0</label
        >
        <div class="text-center">
          <button
            class="w-[6vw] h-[3.5vh] text-[1.7vh] text-white bg-green-600 rounded hover:bg-green-700 transition-colors duration-200"
          >
            JAWAB
          </button>
        </div>
        <div class="block text-center items-center mt-[1vh]">
          <label class="block font-semibold text-green-500">
            Jawaban kamu benar, kamu bisa mengocok dadu
          </label>
          <button
            class="w-[6vw] h-[3.5vh] text-[1.7vh] text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200 mt-[2vh]"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
