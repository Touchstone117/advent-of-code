# frozen_string_literal: true

require_relative '../lib/env'

class BinarySpacePartition
  attr_reader :split_id

  def encoded_seat_id(id)
    @split_id = {
      row_id: id[0..6],
      column_id: id[7..10]
    }
    self
  end

  def calculate_seat_id(seat_info = @seat_info)
    throw 'no seat info' unless seat_info
    # Every seat also has a unique seat ID:
    # multiply the row by 8, then add the column.
    # In this example, the seat has ID 44 * 8 + 5 = 357.
    @seat_id = (seat_info[:row] * 8) + seat_info[:column]
    @seat_id
  end

  def binary_search(code, range_start, range_end)
    return range_start if range_start == range_end

    current = code[0]
    code = code[1..-1]

    range = (range_start..range_end).entries
    range_mid = range[range.length / 2]
    case current
    when 'B', 'R'
      # puts 'upper'
      binary_search(code, range_mid, range_end)
    when 'F', 'L'
      # puts 'lower'
      binary_search(code, range_start, range_mid - 1)
    end
  end

  def decode_row
    throw 'no row info' unless !@split_id.nil? && @split_id[:row_id]
    binary_search(@split_id[:row_id], 0, 127)
  end

  def decode_column
    throw 'no row info' unless !@split_id.nil? && @split_id[:column_id]
    binary_search(@split_id[:column_id], 0, 7)
  end

  def decode_seat_id
    @seat_info = {}
    @seat_info[:row] = decode_row
    @seat_info[:column] = decode_column
    self
  end
end
