export const formatCPF = (cpf) => {
  if (typeof cpf !== "string") return cpf;

  if (cpf.length !== 11) return cpf;

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export const formatPhone = (phone) => {
  if (typeof phone !== "string") return phone;

  if (phone.length === 8) return phone.replace(/(\d{4})(\d{4})/, "$1-$2");

  if (phone.length === 11)
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

  return phone;
};
