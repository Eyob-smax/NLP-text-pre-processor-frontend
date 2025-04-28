function errorSender(e) {
  return {
    success: false,
    message: e.message,
  };
}

const IP = "https://nlp-text-pre-processor-backend-production.up.railway.app";

async function getMarkupRemovedText() {
  try {
    const res = await fetch(`${IP}/markup-free`);
    const data = await res.json();
    return data;
  } catch (err) {
    return errorSender(err);
  }
}

async function getTokenized() {
  try {
    const res = await fetch(`${IP}/tokenized`);
    const data = await res.json();
    return data;
  } catch (err) {
    return errorSender(err);
  }
}

async function getStemmed() {
  try {
    const res = await fetch(`${IP}/stemmed`);
    const data = await res.json();
    return data;
  } catch (err) {
    return errorSender(err);
  }
}

async function getStopped() {
  try {
    const res = await fetch(`${IP}/stopped`);
    const data = await res.json();
    return data;
  } catch (err) {
    return errorSender(err);
  }
}

async function getFinalIndex() {
  try {
    const res = await fetch(`${IP}/index`);
    const data = await res.json();
    return data;
  } catch (err) {
    return errorSender(err);
  }
}

async function getAnalysis() {
  try {
    const res = await fetch(`${IP}/analysis`);
    const data = await res.json();
    return data;
  } catch (err) {
    return errorSender(err);
  }
}

async function getNormalized() {
  try {
    const res = await fetch(`${IP}/normalized`);
    const data = await res.json();
    return data;
  } catch (err) {
    return errorSender(err);
  }
}

export {
  getMarkupRemovedText,
  getTokenized,
  getStemmed,
  getStopped,
  getFinalIndex,
  getAnalysis,
  getNormalized,
};
