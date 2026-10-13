window.addEventListener('DOMContentLoaded', () => {
  console.log('Tone version:', Tone.version)

  /* ---------------- KICK ---------------- */
  const kick = {
    synth: {
      pitchDecay: 0.05,
      octaves: 6,
      oscillator: { type: 'sine' },
      envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 1.4 },
    },
    channel: { volume: -4 },
    sequence: [
      { time: '0:0:0', velocity: 1 },
      { time: '0:2:0', velocity: 1 },
      { time: '0:3:2', velocity: 0.7 },
      { time: '1:0:0', velocity: 1 },
      { time: '1:2:0', velocity: 1 },
      { time: '1:3:2', velocity: 0.6 },
    ],
    loop: '2m',
  }

  /* ---------------- SNARE ---------------- */
  const snare = {
    synth: {
      noise: { type: 'white' },
      envelope: { attack: 0.001, decay: 0.2, sustain: 0 },
    },
    channel: { volume: -6 },
    sequence: [
      { time: '0:1:0', velocity: 0.8 },
      { time: '0:3:0', velocity: 0.8 },
      { time: '1:1:0', velocity: 0.8 },
      { time: '1:3:0', velocity: 0.8 },
      { time: '1:3:3', velocity: 0.4 },
    ],
    loop: '2m',
  }

  /* ---------------- HAT CLOSED ---------------- */
  const hatClosed = {
    synth: {
      noise: { type: 'white' },
      envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.01 },
    },
    highpass: 7000,
    channel: { volume: -8 },
    sequence: [
      { time: '0:1:0', velocity: 1 },
      { time: '0:1:2', velocity: 1 },
      { time: '0:3:2', velocity: 1 },
      { time: '1:1:0', velocity: 1 },
      { time: '1:2:0', velocity: 1 },
      { time: '1:3:2', velocity: 1 },
    ],
    loop: '2m',
  }

  /* ---------------- HAT OPEN ---------------- */
  const hatOpen = {
    synth: {
      noise: { type: 'white' },
      envelope: { attack: 0.001, decay: 0.4, sustain: 0, release: 0.1 },
    },
    highpass: 7000,
    channel: { volume: -12 },
    sequence: [
      { time: '0:2:0', velocity: 1 },
      { time: '1:2:2', velocity: 1 },
      { time: '1:3:0', velocity: 1 },
    ],
    loop: '2m',
  }

  /* ---------------- BASS ---------------- */
  const bassLow = {
    synth: {
      oscillator: { type: 'sawtooth' },
      filter: { Q: 2, type: 'lowpass', rolloff: -24 },
      envelope: { attack: 0.01, decay: 0.3, sustain: 0.4, release: 0.6 },
      filterEnvelope: {
        attack: 0.01,
        decay: 0.2,
        sustain: 0.3,
        release: 0.4,
        baseFrequency: 120,
        octaves: 2.6,
      },
    },
    filter: { type: 'lowpass', frequency: 700, rolloff: -12 },
    distortion: { distortion: 0.2, wet: 0.3 },
    channel: { volume: -10 },
    sequence: [
      { time: '0:0:0', noteName: 'A1', duration: '8n', velocity: 0.9 },
      { time: '0:0:3', noteName: 'A1', duration: '16n', velocity: 0.45 },
      { time: '0:1:2', noteName: 'A1', duration: '16n', velocity: 0.6 },
      { time: '0:2:0', noteName: 'A1', duration: '8n', velocity: 0.85 },
      { time: '0:3:2', noteName: 'E2', duration: '8n', velocity: 0.6 },
      { time: '1:0:0', noteName: 'F1', duration: '8n', velocity: 0.9 },
      { time: '1:0:3', noteName: 'F1', duration: '16n', velocity: 0.45 },
      { time: '1:1:2', noteName: 'F1', duration: '16n', velocity: 0.6 },
      { time: '1:2:0', noteName: 'F1', duration: '8n', velocity: 0.85 },
      { time: '1:3:2', noteName: 'C2', duration: '8n', velocity: 0.6 },
      { time: '2:0:0', noteName: 'C2', duration: '8n', velocity: 0.9 },
      { time: '2:0:3', noteName: 'C2', duration: '16n', velocity: 0.45 },
      { time: '2:1:2', noteName: 'C2', duration: '16n', velocity: 0.6 },
      { time: '2:2:0', noteName: 'C2', duration: '8n', velocity: 0.85 },
      { time: '2:3:2', noteName: 'G2', duration: '8n', velocity: 0.6 },
      { time: '3:0:0', noteName: 'G1', duration: '8n', velocity: 0.9 },
      { time: '3:0:3', noteName: 'G1', duration: '16n', velocity: 0.45 },
      { time: '3:1:2', noteName: 'G1', duration: '16n', velocity: 0.6 },
      { time: '3:2:0', noteName: 'G1', duration: '8n', velocity: 0.85 },
      { time: '3:3:0', noteName: 'D2', duration: '8n', velocity: 0.7 },
    ],
    loop: '4m',
  }

  /* ---------------- М1 ---------------- */
  const melody1 = {
    synth: {
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.005, decay: 0.2, sustain: 0.3, release: 0.4 },
    },
    vibrato: { frequency: 5, depth: 0.15, wet: 0.6 },
    filter: { type: 'lowpass', frequency: 3500, Q: 1 },
    feedbackDelay: { delayTime: '8n', feedback: 0.3, wet: 0.3 },
    reverb: { decay: 2.5, wet: 0.35 },
    channel: { volume: -12 },
    sequence: [
      { time: '0:0:0', noteName: 'A4', duration: '4n', velocity: 0.9 },
      { time: '0:1:0', noteName: 'C5', duration: '8n', velocity: 0.8 },
      { time: '0:2:0', noteName: 'E5', duration: '4n', velocity: 0.9 },
      { time: '0:2:2', noteName: 'C5', duration: '8n', velocity: 0.7 },
      { time: '0:3:0', noteName: 'B4', duration: '4n', velocity: 0.8 },
      { time: '0:3:2', noteName: 'A4', duration: '8n', velocity: 0.7 },
      { time: '1:0:0', noteName: 'F4', duration: '4n', velocity: 0.9 },
      { time: '1:1:0', noteName: 'A4', duration: '8n', velocity: 0.8 },
      { time: '1:2:0', noteName: 'C5', duration: '4n', velocity: 0.9 },
      { time: '1:3:0', noteName: 'A4', duration: '8n', velocity: 0.7 },
      { time: '2:0:0', noteName: 'G4', duration: '4n', velocity: 0.9 },
      { time: '2:0:2', noteName: 'E4', duration: '8n', velocity: 0.7 },
      { time: '2:1:0', noteName: 'G4', duration: '4n', velocity: 0.85 },
      { time: '2:2:0', noteName: 'C5', duration: '4n', velocity: 0.9 },
      { time: '2:3:0', noteName: 'B4', duration: '8n', velocity: 0.75 },
      { time: '3:0:0', noteName: 'D5', duration: '4n', velocity: 0.9 },
      { time: '3:1:0', noteName: 'B4', duration: '8n', velocity: 0.8 },
      { time: '3:2:0', noteName: 'G4', duration: '4n', velocity: 0.85 },
      { time: '3:3:0', noteName: 'D5', duration: '4n', velocity: 0.9 },
    ],
    loop: '4m',
  }

  /* ---------------- М2 ---------------- */
  const melody2 = {
    synth: {
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.15, sustain: 0.2, release: 0.3 },
    },
    chorus: { frequency: 1.5, delayTime: 3.5, depth: 0.7, wet: 0.7 },
    filter: { type: 'lowpass', frequency: 2500, Q: 1 },
    feedbackDelay: { delayTime: '8n', feedback: 0.3, wet: 0.3 },
    reverb: { decay: 2.5, wet: 0.35 },
    channel: { volume: -18 },
    sequence: [
      { time: '0:0:2', noteName: 'E4', duration: '16n', velocity: 0.7 },
      { time: '0:1:2', noteName: 'A4', duration: '16n', velocity: 0.7 },
      { time: '0:2:2', noteName: 'C5', duration: '16n', velocity: 0.7 },
      { time: '0:3:2', noteName: 'E5', duration: '16n', velocity: 0.7 },
      { time: '1:0:2', noteName: 'C4', duration: '16n', velocity: 0.7 },
      { time: '1:1:2', noteName: 'F4', duration: '16n', velocity: 0.7 },
      { time: '1:2:2', noteName: 'A4', duration: '16n', velocity: 0.7 },
      { time: '1:3:2', noteName: 'C5', duration: '16n', velocity: 0.7 },
      { time: '2:0:2', noteName: 'E4', duration: '16n', velocity: 0.7 },
      { time: '2:1:2', noteName: 'G4', duration: '16n', velocity: 0.7 },
      { time: '2:2:2', noteName: 'C5', duration: '16n', velocity: 0.7 },
      { time: '2:3:2', noteName: 'E5', duration: '16n', velocity: 0.7 },
      { time: '3:0:2', noteName: 'D4', duration: '16n', velocity: 0.7 },
      { time: '3:1:2', noteName: 'G4', duration: '16n', velocity: 0.7 },
      { time: '3:2:2', noteName: 'B4', duration: '16n', velocity: 0.7 },
      { time: '3:3:2', noteName: 'D5', duration: '16n', velocity: 0.7 },
    ],
    loop: '4m',
  }

  /* ---------------- СОСТОЯНИЕ ---------------- */
  let bassChannel
  let kickChannel
  let snareChannel
  let hatClosedChannel
  let hatOpenChannel

  let kickPart
  let snarePart
  let hatClosedPart
  let hatOpenPart
  let bassPart
  let melody1Part
  let melody2Part

  let melody1Channel
  let melody2Channel
  let melody1Delay, melody1Reverb, melody1Vibrato
  let melody2Delay, melody2Reverb, melody2Chorus

  /* ---------------- INIT ---------------- */
  function initKick() {
    const synth = new Tone.MembraneSynth(kick.synth)
    kickChannel = new Tone.Channel(kick.channel).toDestination()
    synth.connect(kickChannel)

    kickPart = new Tone.Part((time, step) => {
      synth.triggerAttackRelease('C1', '8n', time, step.velocity)
    }, kick.sequence).start('0:0:0')
    kickPart.loopEnd = kick.loop
    kickPart.loop = true
    kickPart.mute = true
  }

  function initSnare() {
    const synth = new Tone.NoiseSynth(snare.synth)
    snareChannel = new Tone.Channel(snare.channel).toDestination()
    synth.connect(snareChannel)

    snarePart = new Tone.Part((time, step) => {
      synth.triggerAttackRelease('16n', time, step.velocity)
    }, snare.sequence).start('0:0:0')
    snarePart.loopEnd = snare.loop
    snarePart.loop = true
    snarePart.mute = true
  }

  function initHatClosed() {
    const synth = new Tone.NoiseSynth(hatClosed.synth)
    const hp = new Tone.Filter(hatClosed.highpass, 'highpass')
    hatClosedChannel = new Tone.Channel(hatClosed.channel).toDestination()
    synth.chain(hp, hatClosedChannel)

    hatClosedPart = new Tone.Part((time, step) => {
      synth.triggerAttackRelease('32n', time, step.velocity)
    }, hatClosed.sequence).start('0:0:0')
    hatClosedPart.loopEnd = hatClosed.loop
    hatClosedPart.loop = true
    hatClosedPart.mute = true
  }

  function initHatOpen() {
    const synth = new Tone.NoiseSynth(hatOpen.synth)
    const hp = new Tone.Filter(hatOpen.highpass, 'highpass')
    hatOpenChannel = new Tone.Channel(hatOpen.channel).toDestination()
    synth.chain(hp, hatOpenChannel)

    hatOpenPart = new Tone.Part((time, step) => {
      synth.triggerAttackRelease('8n', time, step.velocity)
    }, hatOpen.sequence).start('0:0:0')
    hatOpenPart.loopEnd = hatOpen.loop
    hatOpenPart.loop = true
    hatOpenPart.mute = true
  }

  function initBass() {
    const synth = new Tone.MonoSynth(bassLow.synth)
    const filter = new Tone.Filter(bassLow.filter)
    const distortion = new Tone.Distortion(bassLow.distortion)
    bassChannel = new Tone.Channel(bassLow.channel).toDestination()
    synth.chain(filter, distortion, bassChannel)

    bassPart = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, bassLow.sequence).start('0:0:0')
    bassPart.loopEnd = bassLow.loop
    bassPart.loop = true
    bassPart.mute = true
  }

  async function initMelody1() {
    const synth = new Tone.PolySynth(Tone.Synth, melody1.synth)

    melody1Vibrato = new Tone.Vibrato(melody1.vibrato)
    const filter = new Tone.Filter(melody1.filter)
    melody1Delay = new Tone.FeedbackDelay(melody1.feedbackDelay)
    melody1Reverb = new Tone.Reverb(melody1.reverb)
    melody1Channel = new Tone.Channel(melody1.channel).toDestination()

    await melody1Reverb.generate()

    melody1Vibrato.wet.value = 0
    melody1Delay.wet.value = 0
    melody1Reverb.wet.value = 0

    synth.chain(melody1Vibrato, filter, melody1Delay, melody1Reverb, melody1Channel)

    melody1Part = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melody1.sequence).start('0:0:0')
    melody1Part.loopEnd = melody1.loop
    melody1Part.loop = true
    melody1Part.mute = true
  }

  async function initMelody2() {
    const synth = new Tone.PolySynth(Tone.Synth, melody2.synth)

    melody2Chorus = new Tone.Chorus(melody2.chorus).start()
    const filter = new Tone.Filter(melody2.filter)
    melody2Delay = new Tone.FeedbackDelay(melody2.feedbackDelay)
    melody2Reverb = new Tone.Reverb(melody2.reverb)
    melody2Channel = new Tone.Channel(melody2.channel).toDestination()

    await melody2Reverb.generate()

    melody2Chorus.wet.value = 0
    melody2Delay.wet.value = 0
    melody2Reverb.wet.value = 0

    synth.chain(melody2Chorus, filter, melody2Delay, melody2Reverb, melody2Channel)

    melody2Part = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melody2.sequence).start('0:0:0')
    melody2Part.loopEnd = melody2.loop
    melody2Part.loop = true
    melody2Part.mute = true
  }

  /* ---------------- DOM ---------------- */
  const startButton = document.getElementById('startButton')
  const kickButton = document.getElementById('kickButton')
  const snareButton = document.getElementById('snareButton')
  const hatClosedButton = document.getElementById('hatClosedButton')
  const hatOpenButton = document.getElementById('hatOpenButton')
  const bassButton = document.getElementById('bassButton')
  const melody1Button = document.getElementById('melody1Button')
  const melody2Button = document.getElementById('melody2Button')
  const fxPingPong = document.getElementById('fxPingPong')
  const fxReverb = document.getElementById('fxReverb')
  const fxVibrato = document.getElementById('fxVibrato')
  const fxChorus = document.getElementById('fxChorus')
  const melody1Volume = document.getElementById('melody1Volume')
  const melody2Volume = document.getElementById('melody2Volume')
  const bassVolume = document.getElementById('bassVolume')
  const kickVolume = document.getElementById('kickVolume')
  const snareVolume = document.getElementById('snareVolume')
  const hatClosedVolume = document.getElementById('hatClosedVolume')
  const hatOpenVolume = document.getElementById('hatOpenVolume')

  /* ---------------- START ---------------- */
  startButton.addEventListener('click', async () => {
    startButton.disabled = true
    await Tone.start()
    console.log('AudioContext:', Tone.context.state)

    initKick()
    initSnare()
    initHatClosed()
    initHatOpen()
    initBass()
    await initMelody1()
    await initMelody2()

    const transport = Tone.getTransport()
    transport.bpm.value = 112
    transport.start()
  })

  /* ---------------- ПЕРЕКЛЮЧАТЕЛИ ПАРТИЙ ---------------- */
  function togglePart(part, button) {
    if (!part) return
    if (Tone.context.state !== 'running') {
      console.warn('Сначала нажми Start')
      return
    }
    const on = button.dataset.on === 'true'
    if (on) {
      part.mute = true
      button.dataset.on = 'false'
      button.classList.remove('active')
    } else {
      part.mute = false
      button.dataset.on = 'true'
      button.classList.add('active')
    }
  }

  kickButton.addEventListener('click', () => togglePart(kickPart, kickButton))
  snareButton.addEventListener('click', () => togglePart(snarePart, snareButton))
  hatClosedButton.addEventListener('click', () => togglePart(hatClosedPart, hatClosedButton))
  hatOpenButton.addEventListener('click', () => togglePart(hatOpenPart, hatOpenButton))
  bassButton.addEventListener('click', () => togglePart(bassPart, bassButton))
  melody1Button.addEventListener('click', () => togglePart(melody1Part, melody1Button))
  melody2Button.addEventListener('click', () => togglePart(melody2Part, melody2Button))

  /* ---------------- FX ---------------- */
  function toggleFxOnBoth(effect1, effect2, wet1, wet2, button) {
    if (!effect1 || !effect2) return
    const on = effect1.wet.value > 0
    effect1.wet.rampTo(on ? 0 : wet1, 0.05)
    effect2.wet.rampTo(on ? 0 : wet2, 0.05)
    button.classList.toggle('active', !on)
  }

  function toggleFxOnOne(effect, wet, button) {
    if (!effect) return
    const on = effect.wet.value > 0
    effect.wet.rampTo(on ? 0 : wet, 0.05)
    button.classList.toggle('active', !on)
  }

  fxPingPong.addEventListener('click', () => {
    toggleFxOnBoth(
      melody1Delay,
      melody2Delay,
      melody1.feedbackDelay.wet,
      melody2.feedbackDelay.wet,
      fxPingPong
    )
  })

  fxReverb.addEventListener('click', () => {
    toggleFxOnBoth(
      melody1Reverb,
      melody2Reverb,
      melody1.reverb.wet,
      melody2.reverb.wet,
      fxReverb
    )
  })

  fxVibrato.addEventListener('click', () => {
    toggleFxOnOne(melody1Vibrato, melody1.vibrato.wet, fxVibrato)
  })

  fxChorus.addEventListener('click', () => {
    toggleFxOnOne(melody2Chorus, melody2.chorus.wet, fxChorus)
  })

  /* ---------------- ГРОМКОСТЬ ---------------- */
  melody1Volume.addEventListener('input', (e) => {
    if (!melody1Channel) return
    melody1Channel.volume.value = Number(e.target.value)
  })
  melody2Volume.addEventListener('input', (e) => {
    if (!melody2Channel) return
    melody2Channel.volume.value = Number(e.target.value)
  })
  bassVolume.addEventListener('input', (e) => {
    if (!bassChannel) return
    bassChannel.volume.value = Number(e.target.value)
  })
  kickVolume.addEventListener('input', (e) => {
    if (!kickChannel) return
    kickChannel.volume.value = Number(e.target.value)
  })
  snareVolume.addEventListener('input', (e) => {
    if (!snareChannel) return
    snareChannel.volume.value = Number(e.target.value)
  })
  hatClosedVolume.addEventListener('input', (e) => {
    if (!hatClosedChannel) return
    hatClosedChannel.volume.value = Number(e.target.value)
  })
  hatOpenVolume.addEventListener('input', (e) => {
    if (!hatOpenChannel) return
    hatOpenChannel.volume.value = Number(e.target.value)
  })
})