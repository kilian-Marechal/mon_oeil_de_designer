<template>
  <div class="modal" :class="{ modalActive: optionsOpened }"></div>
  <div class="edit-profile" :class="{ editOpened: editOpened }">
    <div class="primary-button-container">
      <button
        class="primary-button save-button button mb-32"
        @click="editToggle"
      >
        Enregistrer
      </button>
    </div>
    <div class="image-section mb-32">
      <div class="image-container">
        <img class="profile-image" :src="$store.state.user.picture" alt="" />
      </div>
      <button class="secondary-button button">Changer de photo</button>
    </div>
    <div class="infos-container">
      <div class="infos-subcontainer mb-24">
        <p class="mb-8">Mon nom</p>
        <input type="text" name="" id="" v-model="$store.state.user.name" />
      </div>
      <div class="infos-subcontainer">
        <p class="mb-8">Mon email</p>
        <input type="text" name="" id="" v-model="$store.state.user.email" />
      </div>
    </div>
  </div>
  <div class="profile-block section" v-if="$store.state.user.connected">
    <div class="user-container mb-24">
      <button class="options-button" @click="optionsToggle">
        <img src="../assets/svgs/Settings.svg" alt="" />
      </button>
      <div class="image-container">
        <img class="profile-image" :src="$store.state.user.picture" alt="" />
      </div>
      <div class="user-name-container">
        <h1 class="title">{{ $store.state.user.name }}</h1>
      </div>
      <div class="config-popup" :class="{ opened: optionsOpened }">
        <button class="row mb-16" @click="editToggle">
          <img src="../assets/svgs/Profil.svg" alt="" />
          <p>Modifier mon profil</p>
        </button>
        <button class="row">
          <img src="../assets/svgs/LogOut.svg" alt="" />
          <p>Se déconnecter</p>
        </button>
      </div>
    </div>

    <div class="user-stats">
      <div class="user-stats-container mr-16">
        <p>Ligue</p>
        <p>{{ $store.state.user.rank }}</p>
      </div>
      <div class="user-stats-container mr-16">
        <p>Parties</p>
        <p>{{ $store.state.user.games }}</p>
      </div>
      <div class="user-stats-container">
        <p>Points</p>
        <p>{{ $store.state.user.totalScore }}</p>
      </div>
    </div>
  </div>

  <div class="profile-block section" v-else>
    <h1 class="title mb-16">Mon Profil</h1>
    <p class="body mb-16">
      Connectez vous pour <br />enregistrer votre progression.
    </p>
    <div>
      <button class="primary-button">S'inscrire</button>
      <button class="secondary-button">Se connecter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfileSection",
  data() {
    return {
      optionsOpened: false,
      editOpened: false
    };
  },
  methods: {
    optionsToggle: function () {
      this.optionsOpened = !this.optionsOpened;
    },
    editToggle: function () {
      this.editOpened = !this.editOpened;
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 9;
  position: absolute;
  width: 0%;
  height: 0%;
  background-color: $dark;
  opacity: 0;
  transition: 200ms ease-out;
  transition-property: opacity;
  will-change: opacity;
}

.modalActive {
  opacity: 0.7;
  width: 100%;
  height: 100%;
}

.edit-profile {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0%;
  padding: 24px 32px;
  border-radius: 16px 16px 0px 0px;
  background-color: $white;
  transition-property: height;
  transition: 350ms ease;

  .image-section {
    display: flex;
    align-items: center;
  }

  .primary-button-container {
    display: flex;
    justify-content: flex-end;
  }

  .infos-container {
    .infos-subcontainer {
      p {
        margin-left: 8px;
      }

      input {
        width: 100%;
        padding: 8px 8px;
        background-color: $white;
        border: 2px solid $primary;
        border-radius: 4px;
      }
    }
  }
}

.editOpened {
  z-index: 20;
  height: 97.5%;
}

.profile-block {
  position: relative;
  width: 100%;
  background-color: $accentBG;

  .user-container {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 64px;

    .options-button {
      z-index: 10;
    }

    .user-name-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .title {
        line-height: 36px;
      }
    }

    .config-popup {
      z-index: 10;
      position: absolute;
      pointer-events: none;
      top: 68px;
      right: 0px;
      padding: 24px 40px 24px 24px;
      border-radius: 4px;
      background-color: $white;
      transition: 200ms ease-out;
      opacity: 0;
      transform: translateY(-24px);
      will-change: opacity, transform;

      .row {
        z-index: 11;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        padding: 0;

        img {
          margin-right: 8px;
        }
      }
    }

    .opened {
      pointer-events: auto !important;
      opacity: 1;
      transform: translateY(0px);
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

  .primary-button {
    margin-right: 16px;
  }
}

.image-container {
  width: 72px;
  height: 72px;
  margin-right: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
