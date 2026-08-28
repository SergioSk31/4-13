/* ==========================================================================
   4:13 | SCRIPT PRINCIPAL - ESTILO GLORIA CELESTIAL
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. UTILIDADES DE FECHA Y HORA
     ========================================================================== */
  function getTodayString() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function getCurrentMonthKey() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    return `${y}-${m}`;
  }

  function getYesterdayString() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function formatTimeAMPM(date) {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  }

  function formatDateFriendly(date) {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  }

  /* Reloj en vivo en cabecera */
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
    { text: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13" },
    { text: "Bienaventurados los de limpio corazón, porque ellos verán a Dios.", ref: "Mateo 5:8" },
    { text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.", ref: "Salmo 51:10" },
    { text: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento.", ref: "Romanos 12:2" },
    { text: "Por lo demás, hermanos, todo lo que es verdadero, todo lo honesto, todo lo justo, todo lo puro... en esto pensad.", ref: "Filipenses 4:8" },
    { text: "¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros?", ref: "1 Corintios 6:19" },
    { text: "Fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también la salida.", ref: "1 Corintios 10:13" },
    { text: "Huye también de las pasiones juveniles, y sigue la justicia, la fe, el amor y la paz.", ref: "2 Timoteo 2:22" },
    { text: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida.", ref: "Proverbios 4:23" },
    { text: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.", ref: "2 Timoteo 1:7" },
    { text: "¿Con qué limpiará el joven su camino? Con guardar tu palabra.", ref: "Salmo 119:9" },
    { text: "Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros.", ref: "Santiago 4:7" },
    { text: "Digo, pues: Andad en el Espíritu, y no satisfagáis los deseos de la carne.", ref: "Gálatas 5:16" },
    { text: "Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.", ref: "Isaías 40:29" },
    { text: "Si confesamos nuestros pecados, él es fiel y justo para perdonar y limpiarnos de toda maldad.", ref: "1 Juan 1:9" },
    { text: "Renunciando a la impiedad y a los deseos mundanos, vivamos en este siglo sobria, justa y piadosamente.", ref: "Tito 2:12" },
    { text: "Llevando cautivo todo pensamiento a la obediencia a Cristo.", ref: "2 Corintios 10:5" },
    { text: "Puse un pacto con mis ojos; ¿cómo, pues, había yo de mirar con vanidad?", ref: "Job 31:1" },
    { text: "Aparta mis ojos, que no vean la vanidad; avívame en tu camino.", ref: "Salmo 119:37" },
    { text: "Presentad vuestros cuerpos en sacrificio vivo, santo, agradable a Dios.", ref: "Romanos 12:1" }
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
     3. RETOS DIARIOS CAMBIANTES PARA EL HÁBITO 3
     ========================================================================== */
  const DYNAMIC_CHALLENGES = [
    { title: "🎯 Reto Diario: 30 Flexiones", desc: "Canaliza tu energía física y fortalece el templo de tu cuerpo." },
    { title: "🎯 Reto Diario: 40 Sentadillas", desc: "Activa tu fuerza corporal y disciplina tu voluntad." },
    { title: "🎯 Reto Diario: 20 Fondos / Dominadas", desc: "Supera la resistencia física con determinación y vigor." },
    { title: "🎯 Reto Diario: Aprende 'Ágape' (Agape)", desc: "Palabra griega del amor divino incondicional, sacrificial y puro." },
    { title: "🎯 Reto Diario: Aprende 'Shalom' (Paz)", desc: "Concepto hebreo de plenitud, bienestar integral y armonía con Dios." },
    { title: "🎯 Reto Diario: Aprende 'Metanoia'", desc: "Término griego para un cambio radical y transformador de mente." },
    { title: "🎯 Reto Diario: Aprende 'Kadosh' (Santo)", desc: "Término hebreo para 'apartado, puro y consagrado a Dios'." },
    { title: "🎯 Reto Diario: Escribir 3 Agradecimientos", desc: "Anota en tu diario 3 cosas específicas por las que das gracias a Dios hoy." },
    { title: "🎯 Reto Diario: Ordenar tu Habitación", desc: "Un espacio físico limpio y en orden promueve una mente clara y sobria." },
    { title: "🎯 Reto Diario: Caminata de 20 min en Silencio", desc: "Camina al aire libre sin música ni teléfono, contemplando la creación." },
    { title: "🎯 Reto Diario: Enviar un Mensaje de Ánimo", desc: "Escribe un versículo o palabra de aliento a un amigo o familiar." },
    { title: "🎯 Reto Diario: 4 Horas sin Redes Sociales", desc: "Guarda tu vista de estímulos innecesarios durante 4 horas continuas." },
    { title: "🎯 Reto Diario: Aprende 'Parakletos'", desc: "Término griego para el Espíritu Santo: 'Aquel que es llamado a tu lado para consolar y defender'." },
    { title: "🎯 Reto Diario: 2 Litros de Agua y Cuidado", desc: "Hidrata tu cuerpo y cuida tu salud como acto de mayordomía." },
    { title: "🎯 Reto Diario: Memorizar 1 Corintios 10:13", desc: "Guarda en tu memoria el versículo de escape ante la tentación." }
  ];

  function loadDynamicHabit() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    const challenge = DYNAMIC_CHALLENGES[dayOfYear % DYNAMIC_CHALLENGES.length];

    const titleEl = document.getElementById('dynamicHabitTitle');
    const descEl = document.getElementById('dynamicHabitDesc');

    if (titleEl && descEl) {
      titleEl.textContent = challenge.title;
      descEl.textContent = challenge.desc;
    }
  }

  /* ==========================================================================
     4. CONTADOR DE RACHA Y CÁLCULO DE METAS
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

  function updateMedallionGloriaTier(totalDays) {
    const medallion = document.getElementById('streakMedallion');
    if (!medallion) return;

    // Remover clases previas
    medallion.classList.remove(
      'gloria-tier-0', 'gloria-tier-1', 'gloria-tier-2', 
      'gloria-tier-3', 'gloria-tier-4', 'gloria-tier-5'
    );

    if (totalDays >= 90) {
      medallion.classList.add('gloria-tier-5');
    } else if (totalDays >= 30) {
      medallion.classList.add('gloria-tier-4');
    } else if (totalDays >= 14) {
      medallion.classList.add('gloria-tier-3');
    } else if (totalDays >= 7) {
      medallion.classList.add('gloria-tier-2');
    } else if (totalDays >= 3) {
      medallion.classList.add('gloria-tier-1');
    } else {
      medallion.classList.add('gloria-tier-0');
    }
  }

  function updateStreakUI() {
    const startDate = getStreakStartDate();
    const now = new Date();
    const diffMs = Math.max(0, now - startDate);
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    const streakDaysEl = document.getElementById('streakDays');
    if (streakDaysEl) streakDaysEl.textContent = totalDays;

    // Actualizar nivel de gloria y fuego del Espíritu Santo en el medallón
    updateMedallionGloriaTier(totalDays);

    // Progreso de meta
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

    updateClaimButtonState();
    updateDateAdjustVisibility();
    updateTilesCompletionUI();
  }

  /* ==========================================================================
     5. VENTANA ESTRICTA 10:00 PM A 11:59 PM Y REINICIO AUTOMÁTICO
     ========================================================================== */
  const claimDailyBtn = document.getElementById('claimDailyBtn');
  const claimText = document.getElementById('claimText');
  const claimSubtext = document.getElementById('claimSubtext');

  function checkMissedStreakAutoReset() {
    const startDate = getStreakStartDate();
    const now = new Date();
    const diffMs = now - startDate;
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Si ya lleva más de 1 día y no selló la victoria de ayer
    if (totalDays >= 1) {
      const yesterdayStr = getYesterdayString();
      const lastClaimed = localStorage.getItem('lastClaimedVictoryDate');
      const todayStr = getTodayString();

      // Si no selló ayer ni hoy
      if (lastClaimed !== yesterdayStr && lastClaimed !== todayStr) {
        const lastAutoResetNotice = localStorage.getItem('lastMissedNoticeDate');
        if (lastAutoResetNotice !== todayStr) {
          localStorage.setItem('lastMissedNoticeDate', todayStr);
          // Reinicio por no sellar
          localStorage.setItem('streakStartDate', new Date().toISOString());
          alert("⚠️ Aviso de Constancia: No sellaste tu victoria de ayer entre las 10:00 PM y las 11:59 PM. Tu racha se ha reiniciado.\n\nRecuerda: Si fue solo un olvido de marcarla, puedes usar una de tus 3 recuperaciones del mes en 'Ajustar Fecha'.");
        }
      }
    }
  }

  function updateClaimButtonState() {
    if (!claimDailyBtn) return;

    const now = new Date();
    const todayStr = getTodayString();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const lastClaimed = localStorage.getItem('lastClaimedVictoryDate');

    if (claimSubtext) claimSubtext.textContent = "Permanece Firme";

    // 1. Ya se reclamó hoy
    if (lastClaimed === todayStr) {
      claimDailyBtn.className = "btn-claim-streak claimed";
      if (claimText) claimText.textContent = "Victoria Sellada de Hoy";
      return;
    }

    // 2. Activo estrictamente de 10:00 PM (22:00) a 11:59 PM (23:59)
    if (currentHour >= 22 && currentHour <= 23) {
      claimDailyBtn.className = "btn-claim-streak ready";
      if (claimText) claimText.textContent = "Sellar Victoria de Hoy";
    } 
    // 3. Fuera de la ventana
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
        alert("El botón se activa estrictamente de 10:00 PM a 11:59 PM para sellar la jornada completa en victoria. ¡Permanece firme!");
        return;
      }

      // Sellar victoria
      localStorage.setItem('lastClaimedVictoryDate', todayStr);
      updateClaimButtonState();
      updateStreakUI();
      alert("🕊️ ¡Gloria a Dios! Has sellado tu victoria de hoy. 'El que persevera hasta el fin, éste será salvo.'");
    });
  }

  /* ==========================================================================
     6. AJUSTAR FECHA / SISTEMA DE RECUPERACIÓN (ESTILO TIKTOK: 3/MES)
     ========================================================================== */
  const openAdjustDateModalBtn = document.getElementById('openAdjustDateModalBtn');
  const adjustDateModal = document.getElementById('adjustDateModal');
  const closeAdjustDateModalBtn = document.getElementById('closeAdjustDateModalBtn');
  const cancelAdjustDateBtn = document.getElementById('cancelAdjustDateBtn');
  const confirmAdjustDateBtn = document.getElementById('confirmAdjustDateBtn');
  const newStartDateInput = document.getElementById('newStartDateInput');
  const recoveriesCountEl = document.getElementById('recoveriesCount');
  const adjustDateWrapper = document.getElementById('adjustDateWrapper');
  const actionSeparator = document.getElementById('actionSeparator');

  function getMonthlyRecoveriesUsed() {
    const monthKey = getCurrentMonthKey();
    const val = localStorage.getItem(`recoveries_${monthKey}`);
    return val ? parseInt(val, 10) : 0;
  }

  function setMonthlyRecoveriesUsed(count) {
    const monthKey = getCurrentMonthKey();
    localStorage.setItem(`recoveries_${monthKey}`, count);
  }

  function updateDateAdjustVisibility() {
    const currentMonth = getCurrentMonthKey();
    const resetMonth = localStorage.getItem('streakResetMonth');

    // Si se reinició la racha en este mes, ocultar "Ajustar Fecha"
    if (resetMonth === currentMonth) {
      if (adjustDateWrapper) adjustDateWrapper.style.display = 'none';
      if (actionSeparator) actionSeparator.style.display = 'none';
    } else {
      if (adjustDateWrapper) adjustDateWrapper.style.display = 'inline';
      if (actionSeparator) actionSeparator.style.display = 'inline';
    }
  }

  function openAdjustDateModal() {
    const used = getMonthlyRecoveriesUsed();
    const remaining = Math.max(0, 3 - used);
    if (recoveriesCountEl) {
      recoveriesCountEl.textContent = `${remaining}/3`;
    }

    const currentStart = getStreakStartDate();
    if (newStartDateInput) {
      newStartDateInput.value = currentStart.toISOString().split('T')[0];
      newStartDateInput.max = getTodayString();
    }

    if (adjustDateModal) adjustDateModal.classList.remove('hidden');
  }

  if (openAdjustDateModalBtn) openAdjustDateModalBtn.addEventListener('click', openAdjustDateModal);
  if (closeAdjustDateModalBtn) closeAdjustDateModalBtn.addEventListener('click', () => adjustDateModal.classList.add('hidden'));
  if (cancelAdjustDateBtn) cancelAdjustDateBtn.addEventListener('click', () => adjustDateModal.classList.add('hidden'));

  if (confirmAdjustDateBtn) {
    confirmAdjustDateBtn.addEventListener('click', () => {
      const used = getMonthlyRecoveriesUsed();
      if (used >= 3) {
        alert("Ya has utilizado tus 3 recuperaciones disponibles de este mes. ¡Mantente firme para continuar tu racha de forma natural!");
        return;
      }

      const selectedVal = newStartDateInput.value;
      if (!selectedVal) {
        alert("Por favor selecciona una fecha válida.");
        return;
      }

      const parsedDate = new Date(selectedVal + "T00:00:00");
      if (isNaN(parsedDate.getTime()) || parsedDate > new Date()) {
        alert("La fecha debe ser hoy o una fecha anterior.");
        return;
      }

      // Aplicar recuperación
      localStorage.setItem('streakStartDate', parsedDate.toISOString());
      setMonthlyRecoveriesUsed(used + 1);
      adjustDateModal.classList.add('hidden');
      updateStreakUI();
      alert(`✅ Fecha actualizada con éxito. Has usado 1 recuperación (${used + 1}/3 este mes).`);
    });
  }

  /* Reiniciar racha (bloquea ajustar fecha por este mes) */
  const resetStreakBtn = document.getElementById('resetStreakBtn');
  const resetModal = document.getElementById('resetModal');
  const confirmResetBtn = document.getElementById('confirmResetBtn');
  const cancelResetBtn = document.getElementById('cancelResetBtn');

  if (resetStreakBtn && resetModal) {
    resetStreakBtn.addEventListener('click', () => resetModal.classList.remove('hidden'));
  }
  if (cancelResetBtn && resetModal) {
    cancelResetBtn.addEventListener('click', () => resetModal.classList.add('hidden'));
  }

  if (confirmResetBtn && resetModal) {
    confirmResetBtn.addEventListener('click', () => {
      const currentMonth = getCurrentMonthKey();
      localStorage.setItem('streakStartDate', new Date().toISOString());
      localStorage.setItem('streakResetMonth', currentMonth);
      localStorage.removeItem('lastClaimedVictoryDate');
      resetModal.classList.add('hidden');
      updateStreakUI();
      alert("Tu racha ha sido reiniciada. Recuerda: La opción 'Ajustar Fecha' quedará pausada este mes para fortalecer tu compromiso diario. ¡Las misericordias de Dios son nuevas cada mañana!");
    });
  }

  /* ==========================================================================
     7. ESTADOS "HECHO" DE BALDOSAS EN EL MENÚ PRINCIPAL
     ========================================================================== */
  function updateTileStatus(tileId, isDone) {
    const tile = document.getElementById(tileId);
    if (!tile) return;
    const statusIcon = tile.querySelector('.tile-status-icon');

    if (isDone) {
      tile.classList.add('tile-completed');
      if (statusIcon) statusIcon.textContent = "✔";
    } else {
      tile.classList.remove('tile-completed');
      if (statusIcon) statusIcon.textContent = "➔";
    }
  }

  function updateTilesCompletionUI() {
    const todayStr = getTodayString();

    // 1. Versículo
    const isVerseDone = localStorage.getItem(`verseRead_${todayStr}`) === 'true';
    updateTileStatus('tileVerse', isVerseDone);
    const markVerseReadBtn = document.getElementById('markVerseReadBtn');
    const verseReadText = document.getElementById('verseReadText');
    const verseReadIcon = document.getElementById('verseReadIcon');
    if (markVerseReadBtn && verseReadText && verseReadIcon) {
      if (isVerseDone) {
        markVerseReadBtn.classList.add('completed');
        verseReadIcon.textContent = "✔";
        verseReadText.textContent = "Palabra Meditada Hoy";
      } else {
        markVerseReadBtn.classList.remove('completed');
        verseReadIcon.textContent = "📖";
        verseReadText.textContent = "Marcar como Leído y Meditado";
      }
    }

    // 2. Compromiso
    const isCommitDone = localStorage.getItem('lastCommitmentDate') === todayStr;
    updateTileStatus('tileCommitment', isCommitDone);

    // 3. Hábitos (al completar los 4)
    let savedHabits = {};
    try {
      savedHabits = JSON.parse(localStorage.getItem(`habits_${todayStr}`)) || {};
    } catch (e) {
      savedHabits = {};
    }
    const habitKeys = ['habit-1', 'habit-2', 'habit-3', 'habit-4'];
    const habitsCompleted = habitKeys.filter(k => savedHabits[k]).length;
    updateTileStatus('tileHabits', habitsCompleted === 4);

    // 4. Identidad
    const isIdentityDone = localStorage.getItem(`identityRemembered_${todayStr}`) === 'true';
    updateTileStatus('tileIdentity', isIdentityDone);
    const markIdentityBtn = document.getElementById('markIdentityRememberedBtn');
    const identityIcon = document.getElementById('identityIcon');
    const identityText = document.getElementById('identityText');
    if (markIdentityBtn && identityIcon && identityText) {
      if (isIdentityDone) {
        markIdentityBtn.classList.add('completed');
        identityIcon.textContent = "✔";
        identityText.textContent = "Identidad Recordada";
      } else {
        markIdentityBtn.classList.remove('completed');
        identityIcon.textContent = "✨";
        identityText.textContent = "Recordado";
      }
    }

    // 5. Oraciones
    const isPrayersDone = localStorage.getItem(`prayersDone_${todayStr}`) === 'true';
    updateTileStatus('tilePrayers', isPrayersDone);
  }

  // Evento botón Palabra Leída
  const markVerseReadBtn = document.getElementById('markVerseReadBtn');
  if (markVerseReadBtn) {
    markVerseReadBtn.addEventListener('click', () => {
      const todayStr = getTodayString();
      localStorage.setItem(`verseRead_${todayStr}`, 'true');
      updateTilesCompletionUI();
    });
  }

  // Evento botón Identidad Recordada
  const markIdentityRememberedBtn = document.getElementById('markIdentityRememberedBtn');
  if (markIdentityRememberedBtn) {
    markIdentityRememberedBtn.addEventListener('click', () => {
      const todayStr = getTodayString();
      localStorage.setItem(`identityRemembered_${todayStr}`, 'true');
      updateTilesCompletionUI();
    });
  }

  // Evento Compromiso
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
      updateTilesCompletionUI();
    });
  }

  /* ==========================================================================
     8. HÁBITOS (4 HÁBITOS)
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
      habitsCompletedCountEl.textContent = `${completedCount}/4`;
    }
    updateTilesCompletionUI();
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
      habitsCompletedCountEl.textContent = `${completedCount}/4`;
    }
    updateTilesCompletionUI();
  }

  habitRows.forEach(row => {
    const checkbox = row.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.addEventListener('change', saveHabitsState);
    }
  });

  /* ==========================================================================
     9. DIARIO DE ORACIONES (CRUD Y COPIA DE SEGURIDAD JSON)
     ========================================================================== */
  const prayerInput = document.getElementById('prayerInput');
  const savePrayerBtn = document.getElementById('savePrayerBtn');
  const prayersList = document.getElementById('prayersList');
  const downloadBackupBtn = document.getElementById('downloadBackupBtn');
  const restoreBackupInput = document.getElementById('restoreBackupInput');

  function getPrayers() {
    try {
      return JSON.parse(localStorage.getItem('userPrayersList')) || [];
    } catch (e) {
      return [];
    }
  }

  function setPrayers(list) {
    localStorage.setItem('userPrayersList', JSON.stringify(list));
  }

  function renderPrayers() {
    if (!prayersList) return;
    const prayers = getPrayers();
    prayersList.innerHTML = '';

    if (prayers.length === 0) {
      prayersList.innerHTML = '<p class="no-prayers-msg">No has guardado ninguna oración todavía. Escribe tu primera oración arriba. 🕊️</p>';
      return;
    }

    // Ordenar de más reciente a más antigua
    prayers.slice().reverse().forEach((p) => {
      const card = document.createElement('div');
      card.className = 'prayer-item';
      card.innerHTML = `
        <div class="prayer-item-header">
          <span class="prayer-timestamp">🗓️ ${p.date} • ${p.time}</span>
          <button class="btn-delete-prayer" data-id="${p.id}" title="Eliminar oración">🗑️</button>
        </div>
        <p class="prayer-text-body">${escapeHTML(p.text)}</p>
      `;
      prayersList.appendChild(card);
    });

    // Eventos eliminar
    prayersList.querySelectorAll('.btn-delete-prayer').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        if (confirm("¿Deseas eliminar esta oración de tu registro?")) {
          const current = getPrayers();
          const filtered = current.filter(item => item.id !== id);
          setPrayers(filtered);
          renderPrayers();
        }
      });
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  if (savePrayerBtn) {
    savePrayerBtn.addEventListener('click', () => {
      const text = prayerInput.value.trim();
      if (!text) {
        alert("Por favor escribe tu oración antes de guardar.");
        return;
      }

      const now = new Date();
      const newEntry = {
        id: 'prayer_' + Date.now(),
        date: formatDateFriendly(now),
        time: formatTimeAMPM(now),
        text: text
      };

      const current = getPrayers();
      current.push(newEntry);
      setPrayers(current);

      prayerInput.value = '';
      const todayStr = getTodayString();
      localStorage.setItem(`prayersDone_${todayStr}`, 'true');

      renderPrayers();
      updateTilesCompletionUI();
      alert("🕊️ Oración guardada en tu diario personal. Dios escucha el clamor de tu corazón.");
    });
  }

  // Descargar Copia de Seguridad JSON
  if (downloadBackupBtn) {
    downloadBackupBtn.addEventListener('click', () => {
      const backupData = {
        app: "4:13",
        exportDate: new Date().toISOString(),
        streakStartDate: localStorage.getItem('streakStartDate'),
        lastClaimedVictoryDate: localStorage.getItem('lastClaimedVictoryDate'),
        userPrayersList: getPrayers()
      };

      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `4_13_Copia_Seguridad_${getTodayString()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  // Restaurar Copia de Seguridad JSON
  if (restoreBackupInput) {
    restoreBackupInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data.app === "4:13" || data.userPrayersList) {
            if (data.userPrayersList) setPrayers(data.userPrayersList);
            if (data.streakStartDate) localStorage.setItem('streakStartDate', data.streakStartDate);
            if (data.lastClaimedVictoryDate) localStorage.setItem('lastClaimedVictoryDate', data.lastClaimedVictoryDate);

            renderPrayers();
            updateStreakUI();
            alert("✅ ¡Copia de seguridad restaurada con éxito! Tus oraciones y racha están al día.");
          } else {
            alert("El archivo no corresponde a una copia válida de 4:13.");
          }
        } catch (err) {
          alert("Error al leer el archivo de copia de seguridad.");
        }
      };
      reader.readAsText(file);
    });
  }

  /* ==========================================================================
     10. MODAL AUXILIO S.O.S CON RESPIRACIÓN GUIADA
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

  // Apertura y cierre de paneles genéricos
  const navTiles = document.querySelectorAll('.nav-tile');
  const closeOverlayBtns = document.querySelectorAll('[data-close]');

  navTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const targetId = tile.dataset.target;
      const targetOverlay = document.getElementById(targetId);
      if (targetOverlay) {
        targetOverlay.classList.remove('hidden');
        if (targetId === 'panelPrayers') renderPrayers();
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

  // Cerrar cualquier overlay con Escape
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
  loadDynamicHabit();
  checkMissedStreakAutoReset();
  updateStreakUI();
  updateCommitmentUI();
  loadHabitsState();
  renderPrayers();

  // Actualizar estado periódicamente cada 30 segundos
  setInterval(() => {
    updateStreakUI();
    checkMissedStreakAutoReset();
  }, 30000);
});
