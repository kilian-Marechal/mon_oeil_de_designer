<template>
  <div class="search-container section">
    <p class="mb-8">Trouve ton designer ...</p>
    <input
      class="searchbar"
      type="text"
      v-model="searchQuery"
      placeholder="Search"
    />
  </div>
  <div class="list-container section">
    <ol v-if="resultQuery.length">
      <li class="body" v-for="user in resultQuery" :key="user.accountScore">
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
    <div v-else>
      <p>Le designer est inconnu...</p>
      <p>Aucun résultat pour "{{ searchQuery }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  data() {
    return {
      searchQuery: null
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.$store.state.users.filter(user => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => user.firstName.toLowerCase().includes(v));
        });
      } else {
        return this.$store.state.users;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.searchbar {
  width: 100%;
  padding: 6px 8px;
  background-color: $white;
  border: 2px solid $primary;
  border-radius: 4px;
}

.list-container {
  height: 100%;
  background: $gradientBG;

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
  }
}
</style>
