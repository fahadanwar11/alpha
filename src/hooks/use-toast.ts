import { toast as sonnerToast, type ExternalToast } from "sonner";

interface ToastOptions extends ExternalToast {
  title?: string;
  description?: string;
}

// Create a wrapper function that maintains the original API while using Sonner
function toast(options: string | ToastOptions) {
  if (typeof options === "string") {
    return sonnerToast(options);
  }

  const { title, description, ...rest } = options;

  if (title && description) {
    return sonnerToast(title, { description, ...rest });
  } else if (title) {
    return sonnerToast(title, rest);
  } else if (description) {
    return sonnerToast(description, rest);
  } else {
    return sonnerToast("Notification", rest);
  }
}

// Enhanced toast functions for different types
toast.success = (message: string, options?: ExternalToast) => {
  return sonnerToast.success(message, options);
};

toast.error = (message: string, options?: ExternalToast) => {
  return sonnerToast.error(message, options);
};

toast.warning = (message: string, options?: ExternalToast) => {
  return sonnerToast.warning(message, options);
};

toast.info = (message: string, options?: ExternalToast) => {
  return sonnerToast.info(message, options);
};

toast.loading = (message: string, options?: ExternalToast) => {
  return sonnerToast.loading(message, options);
};

toast.promise = sonnerToast.promise;
toast.custom = sonnerToast.custom;
toast.dismiss = sonnerToast.dismiss;

function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
  };
}

export { useToast, toast };
