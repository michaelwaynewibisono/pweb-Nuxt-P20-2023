<template>
  <footer>
    <div class="company-name">HMIT ITS</div>
    <div class="menu">
      <div class="home">Home</div>
      <div class="aboutUs">About Us</div>
      <div class="department">Department</div>
      <div class="contacts">Contacts</div>
      <div class="blog">Blog</div>
    </div>
    <img src="/bungakiri.png" alt="Bunga Kiri" class="bunga-kiri" />
    <img src="/bungakanan.png" alt="Bunga Kanan" class="bunga-kanan" />
    <div class="hmitIts2021">© HMIT ITS 2021, All Rights Reserved.</div>

    <div class="kiri">
      <div class="hmitIts">@hmit_its</div>
      <img class="subtractIcon" alt="" src="/ig.png" />
      <img class="subtractIcon" alt="" src="/twitter.png" />
    </div>
    <div class="kanan">
      <div class="hmitIts1">HMIT ITS</div>
      <img class="subtractIcon" alt="" src="/linkedin.png" />
      <img class="subtractIcon3" alt="" src="/yt.png" />
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: rgba(96, 157, 138, 0.75);
  color: white;
  padding: 1rem;
  text-align: center;
  max-width: 1600px;
  margin: 0 auto;
  box-sizing: border-box;
  height: 446px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.company-name {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  position: absolute;
  top: 31px;
  left: 50%;
  transform: translateX(-50%);
}

.menu {
  position: absolute;
  top: 164px;
  left: 50%;
  transform: translateX(-50%);
}

.menu div {
  line-height: 130%;
  font-weight: 600;
  display: inline-block;
  margin-right: 20px;
}

.bunga-kiri,
.bunga-kanan,
.medsos {
  position: absolute;
  bottom: 0;
}

.bunga-kiri {
  left: 0;
  width: 30%;
  height: auto;
}

.bunga-kanan {
  right: 0;
  width: 30%;
  height: auto;
}

.medsos {
  left: 50%;
  transform: translateX(-50%);
  bottom: 29px;
  width: 100%;
  height: auto;
}

p {
  margin: 0;
}

.hmitIts2021 {
  position: absolute;
  top: 340px;
  left: 50%;
  transform: translateX(-50%);
  line-height: 130%;
  color: rgba(61, 99, 86, 0.7);
  display: inline-block;
  width: 100%;
  height: auto;
}

/*contacts*/
.kiri,
.kanan {
  position: absolute;
  height: auto;
  width: 100%;
  top: 250px; /* Updated Y-coordinate */
  transform: translateX(-75%);
}

.kiri {
  max-width: 49.08%;
  left: 50%;
  right: auto;
}

.hmitIts {
  position: absolute;
  top: 5px;
  left: 66%;
  transform: translate(-50%);
  font-weight: 500;
}

.subtractIcon,
.subtractIcon3 {
  position: relative;
  width: 30px;
  height: 30px;
  display: inline-block;
}

.kanan {
  max-width: 49.08%;
  left: auto;
  right: 50%;
  transform: translateX(65%);
}

.hmitIts1 {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(50%);
  font-weight: 500;
}

.subtractIcon3 {
  left: 0%;
  top: 0px;
}

@media (max-width: 768px) {
  /* Adjustments for smaller screens */
  .kiri,
  .kanan {
    top: 250px; 
  }
}
</style>
