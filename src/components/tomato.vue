<template>
  <div>
    <el-container>
      <el-header>
        <div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-submenu index="1">
              <template slot="title">
                <font-awesome-icon icon="bars" size="2x" />
              </template>
              <el-menu-item index="1-1">Start Page</el-menu-item>
              <el-menu-item index="1-2">Profile</el-menu-item>
              <el-menu-item index="1-3">Finsh list</el-menu-item>
              <el-menu-item index="1-4">Todo list</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="plus-icon">
          <span>Add list</span>
          <font-awesome-icon icon="plus" size="2x" />
        </div>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :md="8" :lg="10" class="list">
            <div class="list-block">
              <div class="head">
                <h2>You finsh list</h2>
                <span class="more">more</span>
              </div>
              <ul class="cards">
                <li class="card">
                  <el-row>
                    <el-col :span="5" class="time">
                      <div class="number">15</div>
                      <div class="unit">minute</div>
                    </el-col>
                    <el-col :span="17" class="work">
                      <h2 class="name">Work name</h2>
                      <p
                        class="content"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure modi vero, sint pariatur consequuntur debitis reprehenderit magni, atque dolore expedita possimus eos labore quos totam vitae accusantium culpa. Ipsum.</p>
                    </el-col>
                    <font-awesome-icon class="dot" :icon="['fas', 'ellipsis-h']" />
                  </el-row>
                </li>
                <li class="card">
                  <el-row>
                    <el-col :span="5" class="time">
                      <div class="number">15</div>
                      <div class="unit">minute</div>
                    </el-col>
                    <el-col :span="17" class="work">
                      <h2 class="name">Work name</h2>
                      <p
                        class="content"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure modi vero, sint pariatur consequuntur debitis reprehenderit magni, atque dolore expedita possimus eos labore quos totam vitae accusantium culpa. Ipsum.</p>
                    </el-col>
                    <font-awesome-icon class="dot" :icon="['fas', 'ellipsis-h']" />
                  </el-row>
                </li>
              </ul>
            </div>

            <div class="list-block">
              <div class="head">
                <h2>Other work list</h2>
                <span class="more">more</span>
              </div>
              <ul class="cards">
                <li class="card">
                  <el-row>
                    <el-col :span="5" class="time">
                      <div class="number">15</div>
                      <div class="unit">minute</div>
                    </el-col>
                    <el-col :span="17" class="work">
                      <h2 class="name">Work name</h2>
                      <p
                        class="content"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure modi vero, sint pariatur consequuntur debitis reprehenderit magni, atque dolore expedita possimus eos labore quos totam vitae accusantium culpa. Ipsum.</p>
                    </el-col>
                    <font-awesome-icon class="dot" :icon="['fas', 'ellipsis-h']" />
                  </el-row>
                </li>
                <li class="card">
                  <el-row>
                    <el-col :span="5" class="time">
                      <div class="number">15</div>
                      <div class="unit">minute</div>
                    </el-col>
                    <el-col :span="17" class="work">
                      <h2 class="name">Work name</h2>
                      <p
                        class="content"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure modi vero, sint pariatur consequuntur debitis reprehenderit magni, atque dolore expedita possimus eos labore quos totam vitae accusantium culpa. Ipsum.</p>
                    </el-col>
                    <font-awesome-icon class="dot" :icon="['fas', 'ellipsis-h']" />
                  </el-row>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :md="16" :lg="14" class="timer">
            <div class="head">
              <div class="now">Start work Now</div>
              <div class="name">Work name this</div>
            </div>
            <div class="circle">
              <div class="time">25:00</div>
              <div>
                <font-awesome-icon class="play" :icon="['far', 'play-circle']" size="4x" />
              </div>
            </div>
            <div class="info">
              <div class="pomodoro">Pomodoro Todo</div>
              <div class="finished">You have finish 2 work</div>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
  

<script>
export default {
  name: "tomato",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
