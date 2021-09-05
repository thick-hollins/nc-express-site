export const formatDate = (resource) => {
    const date = new Date(resource.created_at)
    const dateString = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
      const timeString = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      })
    return { dateString, timeString }
}