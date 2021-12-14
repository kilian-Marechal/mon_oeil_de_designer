<template>
  <div class="gradient-bg">
    <div class="list-container section">
      <ol>
        <li class="body" v-for="user in sortFriends" :key="user.accountScore">
          <div class="li-subContainer">
            <div class="user-container">
              <div class="image-container">
                <img class="profile-image" :src="user.picture" />
              </div>
              <p class="body">{{ user.firstName }} {{ user.lastName }}</p>
            </div>
            <div class="score-container">
              <p class="body">{{ user.accountScore }}pts</p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortedUsersList",

  data() {
    return {};
  },

  computed: {
    sortFriends() {
      // Set slice() to avoid to generate an infinite loop!
      return this.$store.state.user.friends.slice().sort(function (a, b) {
        return b.accountScore - a.accountScore;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-container {
  height: 100%;

  ol {
    counter-reset: users;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 24px;
      counter-increment: users;

      .li-subContainer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .image-container {
        width: 56px;
        min-width: 56px;
        height: 56px;
        margin-right: 16px;
        margin-left: 8px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .user-container {
        display: flex;
        align-items: center;
      }
    }

    li:before {
      width: 68px;
      content: "0" counter(users);
      font-size: 48px;
      color: $accent;
    }
    li:nth-child(n + 10):before {
      content: counter(users);
    }
  }
}
</style>
