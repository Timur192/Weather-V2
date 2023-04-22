import { InputSlice } from "@/redux/Slices/inputSlice";
import { Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import PlacesAutocomplete from "react-places-autocomplete";
import styles from "./input.module.css";

export default function index() {
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSearch = async (value: string) => {
    dispatch(InputSlice(value));
    localStorage.setItem("cityName", value);
    setAddress("");
  };

  const handleSelect = async (value: string, event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
    setAddress(value);
    onSearch(value);
  };

  const handleChange = (value: string) => {
    setAddress(value);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={styles.autocomplete}>
          <div>
            <Input
              placeholder={`${t("Location")}`}
              suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
              {...getInputProps()}
            />
          </div>
          <div className={styles.autocomplete_items}>
            {loading && <div> Loading... </div>}
            {suggestions.map((suggestion) => {
              return (
                <div {...getSuggestionItemProps(suggestion)} key={suggestion.index}>
                  <p>{suggestion.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
