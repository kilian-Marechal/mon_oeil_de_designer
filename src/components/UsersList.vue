<template>
  <div class="list-container section">
    <ol>
      <li
        class="body"
        v-for="user in sortedUsers(users)"
        :key="user.accountScore"
      >
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
</template>

<script>
export default {
  name: "RankedUsersList",
  data() {
    return {
      users: [
        {
          firstName: "Kiik",
          lastName: "mrcl",
          accountScore: "2600",
          picture: require("../../public/users_pictures/kilian.png")
        },
        {
          firstName: "jaaaj",
          lastName: "suuus",
          accountScore: "4800",
          picture: require("../../public/users_pictures/warren.jpg")
        },
        {
          firstName: "Nico",
          lastName: "Tri",
          accountScore: "22600",
          picture: require("../../public/users_pictures/devotist.jpg")
        },
        {
          firstName: "kaurtau",
          lastName: "DevotisteDevotiste",
          accountScore: "600",
          picture: require("../../public/users_pictures/niko.jpg")
        }
      ]
    };
  },
  methods: {
    sortedUsers: function (arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function (a, b) {
        return b.accountScore - a.accountScore;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-container {
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
