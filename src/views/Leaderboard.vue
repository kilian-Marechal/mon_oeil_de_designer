<template>
  <div class="add-friend" :class="{ opened: addFriendOpened }">
    <div class="primary-button-container">
      <p class="title">Ajouter un ami</p>
      <button
        class="primary-button save-button button"
        @click="this.addFriendOpened = !this.addFriendOpened"
      >
        <img src="../assets/svgs/Close.svg" alt="" />
      </button>
    </div>
    <UsersList />
  </div>
  <div class="leaderboard-nav-container">
    <div class="buttons-container mb-24">
      <button
        class="button title"
        :class="{ active: tabDefault }"
        @click="this.tabDefault = true"
      >
        Ma Ligue
      </button>
      <button
        class="button title"
        :class="{ active: !tabDefault }"
        @click="this.tabDefault = false"
      >
        Mes Amis
      </button>
    </div>
    <div class="user-stats" v-if="tabDefault">
      <div class="user-stats-container mr-16">
        <p>Ligue</p>
        <p>{{ $store.state.user.rank }}</p>
      </div>
      <div class="user-stats-container mr-16">
        <p>Points</p>
        <p>{{ $store.state.user.totalScore }}pts</p>
      </div>
      <div class="user-stats-container">
        <p>Fin de la saison</p>
        <p>Dans {{ $store.state.seasonEnd }}</p>
      </div>
    </div>
    <div class="user-stats" v-else>
      <div class="user-stats-container mr-16">
        <p>{{ $store.state.user.friends.length }} amis en compétition</p>
      </div>
      <div class="user-stats-container">
        <button
          class="primary-button"
          @click="this.addFriendOpened = !this.addFriendOpened"
        >
          Ajouter un ami
        </button>
      </div>
    </div>
  </div>

  <div class="">
    <div v-if="tabDefault" :tabDefault="tabDefault" class="gradient-bg">
      <SortedUsersList />
    </div>
    <div v-else>
      <UserFriends />
    </div>
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import SortedUsersList from "@/components/SortedUsersList.vue";
import UsersList from "@/components/UsersList.vue";
import UserFriends from "@/components/UserFriends.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "Leaderboard",

  components: {
    SortedUsersList,
    UsersList,
    UserFriends,
    Nav
  },

  data() {
    return {
      tabDefault: true,
      addFriendOpened: false
    };
  }
};
</script>

<style lang="scss" scoped>
.add-friend {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0%;
  border-radius: 16px 16px 0px 0px;
  background-color: $white;
  transition-property: height;
  transition: 350ms ease;
  will-change: height;

  .image-section {
    display: flex;
    align-items: center;
  }

  .primary-button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 32px 8px 32px;
  }

  input {
    width: 100%;
    padding: 8px 8px;
    background-color: $white;
    border: 2px solid $primary;
    border-radius: 4px;
  }
}

.opened {
  z-index: 20;
  height: 100%;
}

.leaderboard-nav-container {
  padding: 32px 16px 8px 16px;

  .buttons-container {
    display: flex;
    justify-content: space-between;
  }

  .active {
    background-color: $primary;
  }

  .user-stats {
    display: flex;
    justify-content: space-between;

    .user-stats-container {
      width: auto;
    }
  }
}

.user-stats {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .user-stats-container {
    width: 120px;
    padding: 8px 0px;
  }
}
</style>
