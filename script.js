/* ==========================================================================
   4:13 | SCRIPT PRINCIPAL - ESTILO GLORIA CELESTIAL
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. RELOJ EN VIVO EN CABECERA
     ========================================================================== */
  const liveClockEl = document.getElementById('currentLiveTime');

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    if (liveClockEl) {
      liveClockEl.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* ==========================================================================
     2. BANCO DE VERSÍCULOS BÍBLICOS (ESTÁTICO POR DÍA)
     ========================================================================== */
  const BIBLE_VERSES = [
    {
      text: "Todo lo puedo en Cristo que me fortalece.",
      ref: "Filipenses 4:13"
    },
    {
      text: "Bienaventurados los de limpio corazón, porque ellos verán a Dios.",
      ref: "Mateo 5:8"
    },
    {
      text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.",
      ref: "Salmo 51:10"
    },
    {
      text: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta.",
      ref: "Romanos 12:2"
    },
    {
      text: "Por lo demás, hermanos, todo lo que es verdadero, todo lo honesto, todo lo justo, todo lo puro, todo lo amable, todo lo que es de buen nombre; si hay virtud alguna, si algo digno de alabanza, en esto pensad.",
      ref: "Filipenses 4:8"
    },
    {
      text: "Huid de la fornicación. Cualquier otro pecado que el hombre cometa, está fuera del cuerpo; mas el que fornica, contra su propio cuerpo peca. ¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo?",
      ref: "1 Corintios 6:18-19"
    },
    {
      text: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida.",
      ref: "1 Corintios 10:13"
    },
    {
      text: "Huye también de las pasiones juveniles, y sigue la justicia, la fe, el amor y la paz, con los que de corazón limpio invocan al Señor.",
      ref: "2 Timoteo 2:22"
    },
    {
      text: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida.",
      ref: "Proverbios 4:23"
    },
    {
      text: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.",
      ref: "2 Timoteo 1:7"
    },
    {
      text: "¿Con qué limpiará el joven su camino? Con guardar tu palabra. Con todo mi corazón te he buscado; no me dejes desviarme de tus mandamientos.",
      ref: "Salmo 119:9-10"
    },
    {
      text: "Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros. Acercaos a Dios, y él se acercará a vosotros.",
      ref: "Santiago 4:7-8"
    },
    {
      text: "Digo, pues: Andad en el Espíritu, y no satisfagáis los deseos de la carne.",
      ref: "Gálatas 5:16"
    },
    {
      text: "Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.",
      ref: "Isaías 40:29"
    },
    {
      text: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.",
      ref: "1 Juan 1:9"
    },
    {
      text: "La gracia de Dios se ha manifestado para salvación a todos los hombres, enseñándonos que, renunciando a la impiedad y a los deseos mundanos, vivamos en este siglo sobria, justa y piadosamente.",
      ref: "Tito 2:11-12"
    },
    {
      text: "Llevando cautivo todo pensamiento a la obediencia a Cristo.",
      ref: "2 Corintios 10:5"
    },
    {
      text: "Puse un pacto con mis ojos; ¿cómo, pues, había yo de mirar a una doncella?",
      ref: "Job 31:1"
    },
    {
      text: "Aparta mis ojos, que no vean la vanidad; avívame en tu camino.",
      ref: "Salmo 119:37"
    },
    {
      text: "Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional.",
      ref: "Romanos 12:1"
    }
  ];

  function loadDailyVerse() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    const verseIndex = dayOfYear % BIBLE_VERSES.length;
    const dailyVerse = BIBLE_VERSES[verseIndex];

    const textEl = document.getElementById('dailyVerseText');
    const refEl = document.getElementById('dailyVerseReference');

    if (textEl && refEl) {
      textEl.textContent = `"${dailyVerse.text}"`;
      refEl.textContent = `— ${dailyVerse.ref}`;
    }
  }

  /* ==========================================================================
     3. CONTADOR DE RACHA Y CÁLCULO DE METAS
     ========================================================================== */
  const MILESTONES = [
    { days: 1, label: "1 día (Primer paso de victoria)" },
    { days: 3, label: "3 días (Superando el inicio)" },
    { days: 7, label: "7 días (1 semana de gloria)" },
    { days: 14, label: "14 días (2 semanas de dominio)" },
    { days: 21, label: "21 días (Hábito de santidad)" },
    { days: 30, label: "30 días (1 mes de libertad)" },
    { days: 60, label: "60 días (Mente renovada en Cristo)" },
    { days: 90, label: "90 días (Victoria total y renacimiento)" },
    { days: 180, label: "180 días (Medio año consagrado)" },
    { days: 365, label: "365 días (1 año coronado en gloria)" }
  ];

  function getStreakStartDate() {
    let stored = localStorage.getItem('streakStartDate');
    if (!stored) {
      const now = new Date().toISOString();
      localStorage.setItem('streakStartDate', now);
      return new Date(now);
    }
    return new Date(stored);
  }

  function getTodayString() {
    return new Date().toISOString().split('T')[0];
  }

  function updateStreakUI() {
    const startDate = getStreakStartDate();
    const now = new Date();
    const diffMs = Math.max(0, now - startDate);
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    const streakDaysEl = document.getElementById('streakDays');
    if (streakDaysEl) streakDaysEl.textContent = totalDays;

    // Progreso hacia próxima meta
    let nextMilestone = MILESTONES.find(m => m.days > totalDays);
    let prevMilestoneDays = 0;
    
    if (!nextMilestone) {
      nextMilestone = { days: totalDays + 30, label: `${totalDays + 30} días (Hacia la gloria)` };
    }

    const currentMilestoneIndex = MILESTONES.indexOf(nextMilestone);
    if (currentMilestoneIndex > 0) {
      prevMilestoneDays = MILESTONES[currentMilestoneIndex - 1].days;
    }

    const currentMilestoneEl = document.getElementById('currentMilestone');
    const milestonePercentEl = document.getElementById('milestonePercent');
    const progressBarFillEl = document.getElementById('progressBarFill');

    const progressInMilestone = Math.min(1, Math.max(0, (diffMs / (1000 * 60 * 60 * 24) - prevMilestoneDays) / (nextMilestone.days - prevMilestoneDays)));
    const percent = Math.round(progressInMilestone * 100);

    if (currentMilestoneEl) currentMilestoneEl.textContent = `Meta: ${nextMilestone.label}`;
    if (milestonePercentEl) milestonePercentEl.textContent = `${percent}%`;
    if (progressBarFillEl) progressBarFillEl.style.width = `${percent}%`;

    // Actualizar estado del botón de las 10 PM
    updateClaimButtonState();
  }

  /* ==========================================================================
     4. BOTÓN DE ACTIVACIÓN DE RACHA DIARIA (10:00 PM)
     ========================================================================== */
  const claimDailyBtn = document.getElementById('claimDailyBtn');
  const claimText = document.getElementById('claimText');
  const claimSubtext = document.getElementById('claimSubtext');

  function updateClaimButtonState() {
    if (!claimDailyBtn) return;

    const now = new Date();
    const todayStr = getTodayString();
    const currentHour = now.getHours();
    const lastClaimed = localStorage.getItem('lastClaimedVictoryDate');

    if (claimSubtext) claimSubtext.textContent = "Permanece Firme";

    // 1. Ya se reclamó hoy
    if (lastClaimed === todayStr) {
      claimDailyBtn.className = "btn-claim-streak claimed";
      if (claimText) claimText.textContent = "Victoria Sellada de Hoy";
      return;
    }

    // 2. Son las 10:00 PM (22:00) o más tarde
    if (currentHour >= 22) {
      claimDailyBtn.className = "btn-claim-streak ready";
      if (claimText) claimText.textContent = "Sellar Victoria de Hoy";
    } 
    // 3. Aún no son las 10:00 PM
    else {
      claimDailyBtn.className = "btn-claim-streak locked";
      if (claimText) claimText.textContent = "Disponible a las 10:00 PM";
    }
  }

  if (claimDailyBtn) {
    claimDailyBtn.addEventListener('click', () => {
      const now = new Date();
      const currentHour = now.getHours();
      const todayStr = getTodayString();
      const lastClaimed = localStorage.getItem('lastClaimedVictoryDate');

      if (lastClaimed === todayStr) {
        alert("¡Ya has sellado tu victoria de hoy! Descansa en la paz del Señor.");
        return;
      }

      if (currentHour < 22) {
        alert("El botón estará disponible a partir de las 10:00 PM. ¡Permanece firme!");
        return;
      }

      // Confirmar victoria
      localStorage.setItem('lastClaimedVictoryDate', todayStr);
      updateClaimButtonState();
      updateStreakUI();
      alert("🕊️ ¡Gloria a Dios! Has sellado un día más de victoria y fidelidad.");
    });
  }

  // Modales de reinicio y ajuste de fecha
  const resetStreakBtn = document.getElementById('resetStreakBtn');
  const resetModal = document.getElementById('resetModal');
  const confirmResetBtn = document.getElementById('confirmResetBtn');
  const cancelResetBtn = document.getElementById('cancelResetBtn');
  const setStartDateBtn = document.getElementById('setStartDateBtn');

  if (resetStreakBtn && resetModal) {
    resetStreakBtn.addEventListener('click', () => {
      resetModal.classList.remove('hidden');
    });
  }

  if (cancelResetBtn && resetModal) {
    cancelResetBtn.addEventListener('click', () => {
      resetModal.classList.add('hidden');
    });
  }

  if (confirmResetBtn && resetModal) {
    confirmResetBtn.addEventListener('click', () => {
      localStorage.setItem('streakStartDate', new Date().toISOString());
      localStorage.removeItem('lastClaimedVictoryDate');
      resetModal.classList.add('hidden');
      updateStreakUI();
      alert("Tu racha ha sido reiniciada. Las misericordias de Dios son nuevas cada mañana. ¡Levántate con fe renovada!");
    });
  }

  if (setStartDateBtn) {
    setStartDateBtn.addEventListener('click', () => {
      const current = getStreakStartDate();
      const formattedCurrent = current.toISOString().split('T')[0];
      const userInput = prompt("¿En qué fecha comenzaste tu racha limpia? (Formato AAAA-MM-DD, ej. 2026-08-20):", formattedCurrent);
      
      if (userInput) {
        const parsedDate = new Date(userInput + "T00:00:00");
        if (!isNaN(parsedDate.getTime()) && parsedDate <= new Date()) {
          localStorage.setItem('streakStartDate', parsedDate.toISOString());
          updateStreakUI();
        } else {
          alert("Fecha no válida. Debe tener formato AAAA-MM-DD y ser anterior o igual a hoy.");
        }
      }
    });
  }

  /* ==========================================================================
     5. NAVEGACIÓN Y APERTURA DE APARTADOS (OVERLAYS)
     ========================================================================== */
  const navTiles = document.querySelectorAll('.nav-tile');
  const closeOverlayBtns = document.querySelectorAll('[data-close]');

  navTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const targetId = tile.dataset.target;
      const targetOverlay = document.getElementById(targetId);
      if (targetOverlay) {
        targetOverlay.classList.remove('hidden');
      }
    });
  });

  closeOverlayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.close;
      const targetOverlay = document.getElementById(targetId);
      if (targetOverlay) {
        targetOverlay.classList.add('hidden');
      }
    });
  });

  /* ==========================================================================
     6. COMPROMISO DIARIO
     ========================================================================== */
  const commitBtn = document.getElementById('commitBtn');
  const commitStatus = document.getElementById('commitStatus');
  const commitIcon = document.getElementById('commitIcon');
  const commitText = document.getElementById('commitText');

  function updateCommitmentUI() {
    const todayStr = getTodayString();
    const lastCommitDate = localStorage.getItem('lastCommitmentDate');

    if (lastCommitDate === todayStr) {
      if (commitBtn) commitBtn.classList.add('committed');
      if (commitIcon) commitIcon.textContent = "💚";
      if (commitText) commitText.textContent = "¡Compromiso Sellado para Hoy!";
      if (commitStatus) commitStatus.textContent = "Has sellado tu pacto con Dios para hoy. ¡Mantente firme!";
    } else {
      if (commitBtn) commitBtn.classList.remove('committed');
      if (commitIcon) commitIcon.textContent = "🤍";
      if (commitText) commitText.textContent = "Hacer mi compromiso para hoy";
      if (commitStatus) commitStatus.textContent = "";
    }
  }

  if (commitBtn) {
    commitBtn.addEventListener('click', () => {
      const todayStr = getTodayString();
      localStorage.setItem('lastCommitmentDate', todayStr);
      updateCommitmentUI();
    });
  }

  /* ==========================================================================
     7. HÁBITOS Y CHECKLIST
     ========================================================================== */
  const habitRows = document.querySelectorAll('.habit-row');
  const habitsCompletedCountEl = document.getElementById('habitsCompletedCount');

  function loadHabitsState() {
    const todayStr = getTodayString();
    const storageKey = `habits_${todayStr}`;
    let savedState = {};

    try {
      savedState = JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (e) {
      savedState = {};
    }

    let completedCount = 0;

    habitRows.forEach(row => {
      const id = row.dataset.id;
      const checkbox = row.querySelector('input[type="checkbox"]');
      const isChecked = Boolean(savedState[id]);

      if (checkbox) {
        checkbox.checked = isChecked;
        if (isChecked) {
          row.classList.add('checked');
          completedCount++;
        } else {
          row.classList.remove('checked');
        }
      }
    });

    if (habitsCompletedCountEl) {
      habitsCompletedCountEl.textContent = `${completedCount}/${habitRows.length}`;
    }
  }

  function saveHabitsState() {
    const todayStr = getTodayString();
    const storageKey = `habits_${todayStr}`;
    const stateToSave = {};
    let completedCount = 0;

    habitRows.forEach(row => {
      const id = row.dataset.id;
      const checkbox = row.querySelector('input[type="checkbox"]');
      if (checkbox) {
        stateToSave[id] = checkbox.checked;
        if (checkbox.checked) {
          row.classList.add('checked');
          completedCount++;
        } else {
          row.classList.remove('checked');
        }
      }
    });

    localStorage.setItem(storageKey, JSON.stringify(stateToSave));

    if (habitsCompletedCountEl) {
      habitsCompletedCountEl.textContent = `${completedCount}/${habitRows.length}`;
    }
  }

  habitRows.forEach(row => {
    const checkbox = row.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.addEventListener('change', saveHabitsState);
    }
  });

  /* ==========================================================================
     8. MODAL DE AUXILIO S.O.S CON RESPIRACIÓN GUIADA
     ========================================================================== */
  const sosBtn = document.getElementById('sosBtn');
  const sosModal = document.getElementById('sosModal');
  const closeSosBtn = document.getElementById('closeSosBtn');
  const exitSosBtn = document.getElementById('exitSosBtn');
  const breathingText = document.getElementById('breathingText');
  let breathingInterval = null;

  function startBreathingCycle() {
    if (!breathingText) return;
    const stages = [
      "Inhala...",
      "Mantén el aire...",
      "Exhala...",
      "Paz en Cristo..."
    ];
    let index = 0;
    breathingText.textContent = stages[0];

    breathingInterval = setInterval(() => {
      index = (index + 1) % stages.length;
      breathingText.textContent = stages[index];
    }, 4000);
  }

  function stopBreathingCycle() {
    if (breathingInterval) {
      clearInterval(breathingInterval);
      breathingInterval = null;
    }
  }

  function openSosModal() {
    if (sosModal) {
      sosModal.classList.remove('hidden');
      startBreathingCycle();
    }
  }

  function closeSosModal() {
    if (sosModal) {
      sosModal.classList.add('hidden');
      stopBreathingCycle();
    }
  }

  if (sosBtn) sosBtn.addEventListener('click', openSosModal);
  if (closeSosBtn) closeSosBtn.addEventListener('click', closeSosModal);
  if (exitSosBtn) exitSosBtn.addEventListener('click', closeSosModal);

  // Cerrar cualquier overlay con la tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.gloria-overlay').forEach(overlay => {
        overlay.classList.add('hidden');
      });
      stopBreathingCycle();
    }
  });

  /* ==========================================================================
     INICIALIZACIÓN AL ABRIR LA PÁGINA
     ========================================================================== */
  loadDailyVerse();
  updateStreakUI();
  updateCommitmentUI();
  loadHabitsState();

  // Actualizar estado cada minuto
  setInterval(() => {
    updateStreakUI();
  }, 60000);
});
