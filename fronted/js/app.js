

const API_URL = 'http://localhost:3000/maestros'

fetch(API_URL).then(response => response.json())
      .then(data => {
            const div = document.getElementById("tabla");
            
            data.maestros.forEach(maestros => {
              div.innerHTML +=  `<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">CR</div>
<div>
<p class="text-sm font-semibold">${maestros.nombre} ${maestros.apellido}</p >
            <p class="text-xs text-slate-500"> ${maestros.id_maestros}</p>
</div >
</div >
</td >
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"> ${maestros.especialidad}</span>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                                    ${maestros.email}
                                </td>
<td class="px-6 py-4 text-right">
<div class="flex justify-end gap-2">
<button class="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Editar">
<span class="material-symbols-outlined text-[18px]">edit</span>
</button>
<button class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Eliminar">
<span class="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</td>
</tr > `})
      });
      
