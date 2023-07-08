<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="sortBy('id')">ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="comment in paginatedComments"
          :key="comment.id"
          @click="goToComment(comment.id)"
        >
          <td>{{ comment.id }}</td>
          <td>{{ comment.name }}</td>
          <td>{{ comment.email }}</td>
        </tr>
      </tbody>
    </table>

    <div>
      <button @click="prevPage()" :disabled="page === 1">Previous</button>
      <span>{{ page }}</span>
      <button @click="nextPage()" :disabled="page === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      page: 1,
      perPage: 10,
      sortByColumn: "id",
      sortDirection: "asc",
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.comments.length / this.perPage);
    },
    paginatedComments() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.comments.slice(start, end);
    },
  },
  mounted() {
    this.getComments();
  },
  methods: {
    async getComments() {
      try {
        const response = await this.$axios.get("/comments");
        this.comments = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    sortBy(column) {
      if (column === this.sortByColumn) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortByColumn = column;
        this.sortDirection = "asc";
      }

      const sortedComments = [...this.paginatedComments].sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];

        if (this.sortDirection === "asc") {
          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;
        } else {
          if (valueA > valueB) return -1;
          if (valueA < valueB) return 1;
        }

        return 0;
      });

      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      this.comments.splice(
        start,
        this.perPage,
        ...sortedComments.slice(0, this.perPage)
      );
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    goToComment(commentId) {
      this.$router.push(`/comments/${commentId}`);
    },
  },
};
</script>
