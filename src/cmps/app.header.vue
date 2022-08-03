<template>
    <section class="main-header main-layout">
      <div class="logo"><img src="../styles/images/logo.svg" ></div>
      <nav>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">SignIn</a></li>
        </ul>
      </nav>
    </section>
</template>
<script>

export default {
  name: 'appHeader',
  props: {
    boards: Array,
  },
  components: {
  
  },
  data() {
    return {
      isModal: {
        recent: false,
        starred: false,
        templates: false,
      },
    }
  },
  methods: {
    openModal(modalAction) {
      for (let action in this.isModal) {
        this.isModal[action] = false
        if (action === modalAction) {
          this.isModal[action] = true
        }
      }
    },
    closeModal() {
      for (let action in this.isModal) {
        this.isModal[action] = false
      }
    },
    openBoard(boardId) {
      console.log(boardId)
      this.$router.push(`/board/${boardId}`)
    },
    openMenu(menuAction) {
      this.closeModal()
      this.$store.commit({ type: 'openMenu', menuAction })
    },
    closeMenu() {
      this.$store.commit({ type: 'closeMenu' })
    },
  },
  computed: {
    // boards() {
    //   return this.$store.getters.boards

    // },

    starredBoards() {
      const starred = this.boards.filter((board) => {
        board.isStarred
      })
      return starred
    },
    menu() {
      return this.$store.getters.menu
    },
  },
  created() {},
  created() {},
}
</script>
