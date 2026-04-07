const API_URL ='http://localhost:4000/profesor'

fetch(API_URL).then(response=>response.json())
.then(data =>{
      const div = document.getElementById("contenedor")
      data.data.forEach(profesor => {
            
      div.innerHTML+=`
      
      
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
              <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                  <img alt="Dr. Alan Turing" class="size-10 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlnVwvJfJYR6lFsrKe0hHxikBWnnRUIouklUXk7BFxalb7lmZKd1z5u7tX8FPkRBu-l-DlYdkrNJb4_sfKktTpWZOkYtMq7qu6q6EKosy3jETV8P_IMAth1W2_E4EF1FG8r_K17sfM4VelEWDn1AY0lwrwPMXYaS9M2VgOnrsbNqTDzJQXu9PiwbZOgvhmS_gckNlQe8v8fNqZluKMB_ckc3gjNwwUPGfYfW_eDBujXGY51pVhi2AqK1xmAimJJOMq16XEkZs_VcQe" />
                  <div>
                    <p class="text-sm font-bold">${ profesor.nombre }</p>
            

                    <p class="text-xs text-slate-500">alan.turing@university.edu</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span
                  class="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">Computer
                  Science</span>
              </td>
              <td class="px-6 py-4">
                <div class="flex flex-col gap-1">
                  <span class="text-xs font-medium">CS101: Data Structures</span>
                  <span class="text-xs text-slate-500">CS404: Cryptography</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <div class="size-2 rounded-full bg-emerald-500"></div>
                  <span class="text-xs font-medium text-emerald-600 dark:text-emerald-400">Available</span>
                </div>
              </td>
              <td class="px-6 py-4 text-right">
                <button class="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400">
                  <span class="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
      
      
      
      `
      })
})
