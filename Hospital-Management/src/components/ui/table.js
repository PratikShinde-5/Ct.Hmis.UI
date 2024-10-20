import React from "react";

export const Table = ({ children }) => {
  return <table className="min-w-full">{children}</table>;
};

export const TableHeader = ({ children }) => {
  return <thead className="bg-gray-200">{children}</thead>;
};

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children }) => {
  return <tr className="border-b">{children}</tr>;
};

export const TableCell = ({ children }) => {
  return <td className="p-4">{children}</td>;
};

export const TableHead = ({ children }) => {
  return <th className="p-4 text-left">{children}</th>;
};
