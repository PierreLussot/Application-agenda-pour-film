const calendar = new VanillaCalendar({
  selector: "#myCalendar",
  onSelect: (data, elem) => {
    selectedDate = new Date(data.date).toISOString().split("T")[0];
    alert(`Vous avez sélectionné le ${selectedDate}`);
  },
  months: [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mais",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ],
  shortWeekday: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
});

let selectedDate = {};
