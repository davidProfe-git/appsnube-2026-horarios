const API_URL ='http://localhost:4000/horarios'

fetch(API_URL).then(response => response.json( ))
                .then(data =>{

                const div = document.getElementById("tabla")
                div.innerHTML +=` <span class="text-sm font-semibold flex items-center gap-2"><span
                                    class="material-symbols-outlined text-primary text-lg">person</span> Teachers</span>
                            <span class="material-symbols-outlined text-slate-400 text-sm">keyboard_arrow_down</span>
                        </div>
                        <div class="space-y-2">
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input checked="" class="rounded text-primary focus:ring-primary border-slate-300"
                                    type="checkbox" />
                                <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary">Prof.
                                    Sarah Jenkins</span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input checked="" class="rounded text-primary focus:ring-primary border-slate-300"
                                    type="checkbox" />
                                <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary">Dr.
                                    Michael Chen</span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input class="rounded text-primary focus:ring-primary border-slate-300"
                                    type="checkbox" />
                                <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary">Ms.
                                    Elena Rodriguez</span>
                            </label>
                        </div>
                    </div>
                    <!-- Classroom Filter -->
                    <div class="mb-6">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold flex items-center gap-2"><span
                                    class="material-symbols-outlined text-primary text-lg">meeting_room</span>
                                Classrooms</span>
                            <span class="material-symbols-outlined text-slate-400 text-sm">keyboard_arrow_down</span>
                        </div>
                        <div class="space-y-2">
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input checked="" class="rounded text-primary focus:ring-primary border-slate-300"
                                    type="checkbox" />
                                <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary">Lab
                                    402 (Sci-Tech)</span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input checked="" class="rounded text-primary focus:ring-primary border-slate-300"
                                    type="checkbox" />
                                <span class="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary">Room
                                    12B (Main)</span>
                            </label>
                        </div>
                    </div>`
                })