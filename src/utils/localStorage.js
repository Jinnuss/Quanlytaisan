const STORAGE_KEY = "assets";

export const loadAssets = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Lỗi đọc localStorage:", error);
    return [];
  }
};

export const saveAssets = (assets) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assets));
  } catch (error) {
    console.error("Lỗi lưu localStorage:", error);
  }
};