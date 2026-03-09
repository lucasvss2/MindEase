import { TaskModel } from "@/domain/models/TaskModel";
import { Dispatch, SetStateAction } from "react";
import { GestureResponderEvent, TextStyle } from "react-native";

export interface IChecklistField {
  id: string;
  text: string;
  isConcluded: boolean;
  isEditing?: boolean;
}

export interface IChecklistForm {
  checklist: IChecklistField[];
}

export interface ITaskSharedProps {
  task: TaskModel;
}

export interface ITaskHeader {
  task: TaskModel;
  scaledTextBase: TextStyle;
}

export interface IChecklistItemEdit {
  value: string;
  index: number;
  onChange: (text: string) => void;
  onSave: (index: number) => Promise<void>;
  onCancel: (index: number) => void;
  isSaving: boolean;
}

export interface IChecklistItemView {
  index: number;
  item: IChecklistField;
  onToggle: (index: number) => Promise<void>;
  onEdit: (index: number) => void;
  onDelete: (index: number) => Promise<void>;
  isAnyItemEditing: boolean;
}

export interface ITaskHeaderTextContainer {
  text: string;
  scaledText: TextStyle;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export interface ITaskSharedActions {
  onConfirm: () => void;
  onCancel: () => void;
}

export interface ITaskHeaderEditionContainer extends ITaskSharedActions {
  isSaving: boolean;
  tempValue: string;
  setTempValue: Dispatch<SetStateAction<string>>;
}

export interface ICreateOrEditActionsButtons {
  isLoading: boolean;
  onConfirm: (field: "description" | "title", value: string) => void;
  onCancel: () => void;
}

export interface ICreateOrEditField {
  scaledTextBase: TextStyle;
  isSaving: boolean;
  task: TaskModel;
}

export interface IFocusConfigField {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onUpdateFocusConfig: () => void
  isPending?: boolean
}

