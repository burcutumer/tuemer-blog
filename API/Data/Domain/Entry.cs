using API.Data.Domain;
using API.Domain;

namespace Domain
{
    public class Entry
    {
        public int Id { get; set; }
        public int TitleId { get; set; }
        required public Title Title { get; set; }
        required public string Message { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime Date { get; set; }
        public int AuthorId { get; set; }
        required public Author Author { get; set; }
        public List<Tag> Tags { get; set; } = new List<Tag>();
    }
}