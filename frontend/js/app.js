const API_URL ='http://localhost:4000/profesor'

fetch(API_URL).then(response => response.json( ))
                .then(data =>{

                const div = document.getElementById("tabla")
                div.innerHTML +=`<h2 class="text-2xl font-bold text-slate-900 tracking-tight">Asignar clase</h2>
<p class="text-slate-500 text-sm font-normal">Fill in the details below to schedule a new session.</p>
</div>
<button class="p-2 hover:bg-slate-100 rounded-full transition-colors">
<span class="material-symbols-outlined text-slate-400">close</span>
</button>
</div>
<!-- Scrollable Form Body -->
<div class="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
<form class="space-y-6">
<!-- Class Title -->
<div class="flex flex-col gap-2">
<label class="text-sm font-semibold text-slate-700" for="class-title">Titulo de clase</label>
<input class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400" id="class-title" placeholder="e.g. Advanced Mathematics 101" type="text"/>
</div>
<!-- Teacher Selection -->
<div class="flex flex-col gap-2">
<label class="text-sm font-semibold text-slate-700">Asignar profesor</label>
<div class="relative group">
<select class="appearance-none w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all pr-10">
<option disabled="" selected="" value="">Search for a teacher...</option>
<option value="1">Dr. Sarah Jenkins (Math Dept)</option>
<option value="2">Prof. Marcus Thorne (Physics)</option>
<option value="3">Elena Rodriguez (Art &amp; Design)</option>
</select>`
                

                })